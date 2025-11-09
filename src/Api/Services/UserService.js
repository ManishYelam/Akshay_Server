const { hashPassword } = require('../Helpers/hashPassword');
const { Op } = require('sequelize');
const { generateOTPTimestamped, verifyOTPTimestamped, generateStrongPassword } = require('../../Utils/OTP');
const { sendLaunchCodeEmail, sendVerificationEmail } = require('./email.Service');
const { User, Role, Permission, Payment, UserDocument } = require('../Models/Association');
const { sequelize } = require('../../Config/Database/db.config');

const SERVER_URL = process.env.SERVER_URL;

module.exports = {
  createUser: async data => {
    try {
      const { otp, expiryTime } = generateOTPTimestamped(10, 3600000, true);

      data.otp = otp;
      data.expiryTime = expiryTime;

      const newUser = await User.create(data);

      const userId = newUser.user_id;
      const userName = newUser.full_name;

      const verificationUrl = `${SERVER_URL}/api/users/verify?userId=${userId}&otp=${otp}`;

      // Send verification email
      await sendLaunchCodeEmail(userId, userName, newUser.email, verificationUrl, otp);

      return newUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },

  verifyCreateUser: async (userId, launchCode) => {
    try {
      // console.log(userId, launchCode);
      const user = await User.findByPk(userId);
      // console.log(user);
      if (!user) throw new Error('User not found');

      const { otp, expiryTime } = user;
      // console.log(otp, expiryTime);
      if (!otp || !expiryTime) throw new Error('Launch code is missing or expired');

      const { isValid, message } = verifyOTPTimestamped(launchCode, otp, expiryTime);
      if (!isValid) throw new Error(message);

      const generate_password = generateStrongPassword(16);
      const password = await hashPassword(generate_password);

      // Update user verification status
      user.isVerified = true;
      user.otp = null;
      user.expiryTime = null;
      user.password = password;
      await user.save();

      const userName = `${user.full_name}`;
      await sendVerificationEmail(userName, user.email, generate_password);

      return user;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },

  resendVerification: async userId => {
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error('User not found');

      const { otp, expiryTime } = generateOTPTimestamped(10, 3600000, true);
      // console.log(otp, expiryTime);
      if (!otp || !expiryTime) throw new Error('Launch code is missing or expired');

      const generate_password = generateStrongPassword(16);
      const password = await hashPassword(generate_password);
      // Update user verification status
      user.isVerified = false;
      user.otp = otp;
      user.expiryTime = expiryTime;
      user.password = password;
      await user.save();
      const userName = `${user.full_name}`;
      await sendVerificationEmail(userName, user.email, generate_password);
      return user;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },

  getAllUsers: async () => {
    return User.findAll();
  },

  getAllUsersV2: async ({ page = 1, limit = 10, search = '', searchFields = [], filters = {} }) => {
    try {
      const offset = (page - 1) * limit;
      let whereConditions = {};

      // **Apply Filters Dynamically**
      if (filters.status) whereConditions.status = filters.status;
      if (filters.role) whereConditions.role = filters.role;
      if (filters.isVerified) whereConditions.isVerified = filters.isVerified;
      if (filters.logged_in_status) whereConditions.logged_in_status = filters.logged_in_status;
      if (filters.phone_number) whereConditions.phone_number = { [Op.like]: `%${filters.phone_number}%` };
      if (filters.email) whereConditions.email = { [Op.like]: `%${filters.email}%` };

      // **Apply Dynamic Search Using `.map()`**
      let searchConditions =
        search && searchFields.length > 0 ? searchFields.map(field => ({ [field]: { [Op.like]: `%${search}%` } })) : [];

      // **Final WHERE condition combining filters & search**
      let finalWhereCondition = { ...whereConditions };
      if (searchConditions.length > 0) {
        finalWhereCondition[Op.or] = searchConditions;
      }

      // **Fetch Users with Filters, Pagination & Sorting**
      const { rows, count } = await User.findAndCountAll({
        where: finalWhereCondition,
        limit,
        offset,
        order: [['createdAt', 'DESC']],
      });

      return {
        message: '✅ Users fetched successfully.',
        totalRecords: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        data: rows,
      };
    } catch (error) {
      console.error('❌ Error in getAllUsers:', error.message);
      throw new Error(`❌ Error in getAllUsers: ${error.message}`);
    }
  },

  getUserById: async id => {
    const user = await User.findByPk(id);
    return user;
  },

  getUserByEmail: async email => {
    const user = await User.findOne({
      where: { email: userEmail },
      include: [
        {
          model: Role,
          // include: [{ model: Permission }],
        },
      ],
    });
    return user;
  },

  checkExistsEmail: async email => {
    const user = await User.findOne({ where: { email } });
    return user;
  },

  updateUser: async (userId, data) => {
    const transaction = await sequelize.MAIN_DB_NAME.transaction();
    try {
      const user = await User.findByPk(userId, { transaction });
      if (!user) {
        throw new Error('User not found');
      }

      // Prepare updated user data
      const updatedUserData = {
        full_name: data.full_name ?? user.full_name,
        date_of_birth: data.date_of_birth ?? user.date_of_birth,
        age: data.age ?? user.age,
        email: data.email ?? user.email,
        phone_number: data.phone_number ?? user.phone_number,
        adhar_number: data.adhar_number ?? user.adhar_number,
        occupation: data.occupation ?? user.occupation,
        gender: data.gender ?? user.gender,
        address: data.address ?? user.address,
        additional_notes: data.additional_notes ?? user.additional_notes,
        status: data.status ?? user.status,
        role_id: data.role_id ?? user.role_id,
        user_metadata: data.user_metadata ? { ...user.user_metadata, ...data.user_metadata } : user.user_metadata,
      };

      // Check edit_flag to determine if we should update password
      if (data.edit_flag === 'profile_edit') {
        // Profile edit - keep existing password, don't hash anything
        updatedUserData.password = user.password;
        console.log('Profile edit - preserving existing password');
      } else if (data.password) {
        // Regular update with password - hash the new password
        const hashedPassword = await hashPassword(data.password);
        updatedUserData.password = hashedPassword;
        console.log('Password update - hashing new password');
      } else {
        // No password provided and no edit_flag - keep existing password
        updatedUserData.password = user.password;
        console.log('No password provided - preserving existing password');
      }

      // Update user record
      await user.update(updatedUserData, { transaction });
      await transaction.commit();

      // Return user without password for security
      const userResponse = user.toJSON();
      delete userResponse.password;

      return {
        message: 'User updated successfully',
        user: userResponse,
      };
    } catch (error) {
      await transaction.rollback();
      throw new Error('Error updating user: ' + error.message);
    }
  },

  deleteUser: id => {
    return User.destroy({ where: { id } });
  },

  deleteUserRanges: async (startId, endId) => {
    const deletedCount = await User.destroy({
      where: {
        id: {
          [Op.between]: [startId, endId],
        },
      },
    });
    return deletedCount;
  },

  UserlinkStatusUpdate: async (user_id, status, reg_type) => {
    const allowedStatuses = ['active', 'expired', 'pending'];
    if (!allowedStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }
    const updateData = { reg_link_status: status };
    if (reg_type) {
      updateData.reg_type = reg_type;
    }
    const [updatedCount] = await User.update(updateData, { where: { id: user_id } });
    return { success: updatedCount > 0, updatedCount };
  },

  getUserById: async userId => {
    try {
      // Your implementation to get user by ID
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },
};

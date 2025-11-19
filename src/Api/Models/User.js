const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/Database/db.config');
const bcrypt = require('bcrypt');

const userAttribute = {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'client',
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  adhar_number: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  additional_notes: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  occupation: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'active',
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expiryTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  profile_image: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  reg_type: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'manual',
  },
  reg_link_status: {
    type: DataTypes.ENUM('active', 'expired', 'pending'),
    allowNull: false,
    defaultValue: 'active',
  },
  user_metadata: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  logged_in_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  last_login_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  last_application_pdf: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  expiredAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

const User = sequelize.MAIN_DB_NAME.define('User', userAttribute, {
  tableName: 'tbl_user',
  timestamps: true,
  // hooks: {
  //   beforeCreate: async user => {
  //     if (user.password) {
  //       user.password = await bcrypt.hash(user.password, 12);
  //     }
  //   },
  //   beforeUpdate: async user => {
  //     if (user.changed('password')) {
  //       user.password = await bcrypt.hash(user.password, 12);
  //     }
  //   },
  // },
});

User.prototype.checkPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  delete values.metadata;
  return values;
};

User.prototype.updateLoginStatus = async function (token) {
  return await this.update({
    logged_in_status: true,
    last_login_at: new Date(),
    token,
    expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours
    expiredAt: null,
  });
};

module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/Database/sequelize.config');
const User = require('./User');
const Course = require('./Course');

const Enrollment = sequelize.MAIN_DB_NAME.define(
  'Enrollment',
  {
    enrollment_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    enrollment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('active', 'completed', 'cancelled', 'pending'),
      defaultValue: 'pending',
    },
    progress: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100,
      },
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    metadata: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
  },
  {
    tableName: 'tbl_enrollments',
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'course_id'],
      },
    ],
  }
);

module.exports = Enrollment;

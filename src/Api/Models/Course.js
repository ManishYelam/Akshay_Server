const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/Database/sequelize.config');

const Course = sequelize.MAIN_DB_NAME.define(
  'Course',
  {
    course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 255],
      },
    },
    slug: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    short_description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '3 Months',
    },
    fee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    original_fee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    mode: {
      type: DataTypes.ENUM('online_live', 'online_self_paced', 'hybrid'),
      defaultValue: 'online_live',
    },
    level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      defaultValue: 'beginner',
    },
    syllabus_pdf: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    thumbnail_image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    seats_available: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    view_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    metadata: {
      type: DataTypes.JSON,
      defaultValue: {
        modules: [],
        prerequisites: [],
        learning_objectives: [],
        curriculum: [],
      },
    },
  },
  {
    tableName: 'tbl_courses',
  }
);

Course.prototype.getDiscountPercentage = function () {
  if (this.original_fee && this.original_fee > this.fee) {
    return Math.round(((this.original_fee - this.fee) / this.original_fee) * 100);
  }
  return 0;
};

module.exports = Course;

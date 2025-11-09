const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/Database/db.config');
const User = require('./User');
const Course = require('./Course');

const UserDocument = sequelize.MAIN_DB_NAME.define(
  'UserDocument',
  {
    user_doc_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    document_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'application_pdf',
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    file_path: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    file_size: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    mime_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'application/pdf',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    uploaded_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    metadata: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: 'tbl_user_documents',
    timestamps: true,
  }
);

module.exports = UserDocument;

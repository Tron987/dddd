const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the sequelize instance from config/db

const Client = sequelize.define('Client', {
  client_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'clients',
  timestamps: true,
});

module.exports = Client;

// src/models/transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the sequelize instance from config/db
const File = require('./file'); // Import the File model
const Client = require('./client'); // Import the Client model

const Transaction = sequelize.define('Transaction', {
  transaction_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  file_id: {
    type: DataTypes.INTEGER,
    references: {
      model: File,
      key: 'file_id',
    },
  },
  client_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Client,
      key: 'client_id',
    },
  },
  transaction_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'transactions',
  timestamps: true,
});

// Define associations if needed
Transaction.belongsTo(File, { foreignKey: 'file_id', as: 'file' });
Transaction.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });

module.exports = Transaction;

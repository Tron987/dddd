const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure this is at the top of your file

// Construct the DATABASE_URL from individual environment variables
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Optional: set to true if you want to see SQL logs
});

module.exports = sequelize;

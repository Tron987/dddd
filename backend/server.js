// src/server.js
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const fileRoutes = require('./src/routes/fileRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes'); // Fixed typo

const sequelize = require('./src/config/db'); // Import sequelize instance directly

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/files', fileRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Error syncing database:', err);
});

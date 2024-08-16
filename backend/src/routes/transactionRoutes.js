const express = require('express');
const { recordTransaction, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/record', recordTransaction);
router.get('/', getTransactions);

module.exports = router;

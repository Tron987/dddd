const Transaction = require('../models.js/transaction');

exports.recordTransaction = async (req, res) => {
  const { fileId, clientId } = req.body;
  try {
    const transaction = await Transaction.create({ file_id: fileId, client_id: clientId });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const mongoose = require('mongoose');
const CoinTransaction = require('../models/CoinTransaction');

function create(portfolioId, data) {
  return new CoinTransaction({ portfolio: portfolioId, ...data }).save();
}

function deleteOne(transactionId) {
  return CoinTransaction.deleteOne({
    _id: transactionId,
  });
}

function updateTransaction(_id, updatedTransaction) {
  return CoinTransaction.findByIdAndUpdate(
    _id,
    { ...updatedTransaction },
    { new: true }
  );
}

module.exports = {
  create,
  deleteOne,
  updateTransaction,
};

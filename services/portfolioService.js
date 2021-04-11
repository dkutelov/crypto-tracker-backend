const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');
const transactionService = require('./transactionService');

function create(userId) {
  return new Portfolio({ creator: userId, transactions: [] }).save();
}

function findOneById(userId) {
  return Portfolio.findOne({ creator: userId }).populate('transactions').lean();
}

function addTransaction(portfolioId, transactionId) {
  return Portfolio.updateOne(
    {
      _id: portfolioId,
    },
    { $push: { transactions: transactionId } },
    { new: true }
  );
}

function deleteTransaction(userId, transactionId) {
  return Portfolio.updateOne(
    {
      creator: userId,
    },
    { $pull: { transactions: transactionId } },
    { new: true }
  );
}

function deleteOne(userId) {
  return Portfolio.deleteOne({
    user: userId,
  });
}

module.exports = {
  create,
  findOneById,
  deleteOne,
  addTransaction,
  deleteTransaction,
};

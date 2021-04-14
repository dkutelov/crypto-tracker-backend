const router = require('express').Router();

const { isAuth } = require('../middlewares/auth');
const portfolioService = require('../services/portfolioService');
const transactionService = require('../services/transactionService');

router.get('/', isAuth, (req, res) => {
  const userId = req.user._id;
  portfolioService.findOneById(userId).then((portfolio) => {
    res.status(200).json(portfolio);
  });
});

router.post('/', isAuth, (req, res) => {
  const { type, coinId, amount, price, portfolioId, application } = req.body;

  const newTransaction = {
    type,
    coinId,
    amount: Number(amount),
    price: Number(price),
    application,
  };

  transactionService.create(portfolioId, newTransaction).then((transaction) => {
    portfolioService
      .addTransaction(portfolioId, transaction._id)
      .then((upodatedPortfolio) => {
        res.status(200).json({ createdTransaction: transaction });
      });
  });
});

router.put('/', isAuth, (req, res) => {
  const { _id, type, coinId, amount, price, application } = req.body;

  const updatedTransaction = {
    type,
    coinId,
    amount: Number(amount),
    price: Number(price),
    application,
  };

  transactionService
    .updateTransaction(_id, updatedTransaction)
    .then((transaction) => {
      res.status(200).json({ updatedTransaction: transaction });
    });
});

router.delete('/', isAuth, (req, res) => {
  const transactionId = req.query.id;
  const userId = req.user._id;

  transactionService.deleteOne(transactionId).then((transaction) => {
    portfolioService.deleteTransaction(userId, transactionId).then(() => {
      res.status(200).json({ id: transactionId });
    });
  });
});

module.exports = router;

const router = require('express').Router();
const Profile = require('../models/Profile');

const { isAuth } = require('../middlewares/auth');
const profileService = require('../services/profileService');

router.get('/', isAuth, (req, res) => {
  const userId = req.query.id;
  profileService.getProfile(userId).then((profile) => {
    res.status(200).json(profile);
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
  const {
    _id,
    type,
    coinId,
    amount,
    price,
    portfolioId,
    application,
  } = req.body;

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

module.exports = router;

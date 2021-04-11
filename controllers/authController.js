const router = require('express').Router();

const authService = require('../services/authService');
const portfolioService = require('../services/portfolioService');

router.post('/register', (req, res, next) => {
  let { username, password } = req.body;
  username = username.toLowerCase();

  authService
    .register(username, password)
    .then((createdUser) => {
      portfolioService.create(createdUser.id).then((profile) => {
        res.status(201).json(createdUser);
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;
  username = username.toLowerCase();

  authService
    .login(username, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

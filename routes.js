const router = require('express').Router();

const authController = require('./controllers/authController');
const portfolioController = require('./controllers/portfolioController');

router.use('/auth', authController);
router.use('/portfolios', portfolioController);

module.exports = router;

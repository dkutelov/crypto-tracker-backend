const router = require('express').Router();

const authController = require('./controllers/authController');
const portfolioController = require('./controllers/portfolioController');
const profileController = require('./controllers/profileController');

router.use('/auth', authController);
router.use('/portfolios', portfolioController);
router.use('/profiles', profileController);

module.exports = router;

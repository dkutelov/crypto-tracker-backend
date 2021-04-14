const router = require('express').Router();

const { isAuth } = require('../middlewares/auth');
const profileService = require('../services/profileService');

router.get('/', isAuth, (req, res) => {
  const userId = req.user._id;
  profileService.getProfile(userId).then((profile) => {
    res.status(200).json(profile);
  });
});

router.post('/', isAuth, (req, res) => {
  const data = req.body;
  const userId = req.user._id;

  profileService.createProfile(userId, data).then((profile) => {
    res.status(200).json({ profile });
  });
});

router.put('/', isAuth, (req, res) => {
  const data = req.body;
  const profileId = data._id;
  const userId = req.user._id;
  profileService.updateProfile(profileId, userId, data).then((profile) => {
    res.status(200).json({ profile });
  });
});

module.exports = router;

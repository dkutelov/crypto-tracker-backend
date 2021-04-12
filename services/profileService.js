const mongoose = require('mongoose');
const Profile = require('../models/Profile');

function createProfile(userId, data) {
  return new Profile({ user: userId, data }).save();
}

function getProfile(userId) {
  return Profile.findOne({ user: userId }).lean();
}

function updateProfile(profileId, userId, data) {
  return Profile.updateOne(
    {
      _id: profileId,
      user: userId,
    },
    data,
    { new: true }
  );
}

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
};

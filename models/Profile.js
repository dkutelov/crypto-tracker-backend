const { Schema, Types, model } = require('mongoose');

const profileSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
  avatarUrl: {
    type: String,
    default: '/images/default-user.png',
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = model('Profile', profileSchema);

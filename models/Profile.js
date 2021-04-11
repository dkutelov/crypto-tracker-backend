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
  creditCardNumber: {
    type: String,
    defualt: '4242 4242 4242 4242',
  },
  creditCardCVC: {
    type: String,
    defualt: '123',
  },
  creditCardValidity: {
    type: String,
    defualt: '04/20/2021',
  },
});

module.exports = model('Profile', profileSchema);

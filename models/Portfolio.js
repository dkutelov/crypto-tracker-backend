const { Schema, Types, model } = require('mongoose');

const portfolioSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: Types.ObjectId,
    ref: 'User',
  },
  transactions: [
    {
      type: Types.ObjectId,
      ref: 'CoinTransaction',
    },
  ],
});

module.exports = model('Portfolio', portfolioSchema);

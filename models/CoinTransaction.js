const { Schema, Types, model } = require('mongoose');

const coinTransactionSchema = new Schema({
  type: {
    type: String,
    enum: ['b', 's'],
    default: 'b',
  },
  coinId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  purchasedAt: {
    type: Date,
    default: Date.now,
  },
  portfolio: {
    type: Types.ObjectId,
    ref: 'Portfolio',
  },
  application: {
    type: String,
    default: 'other',
  },
});

module.exports = model('CoinTransaction', coinTransactionSchema);

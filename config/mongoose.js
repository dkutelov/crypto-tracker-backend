const mongoose = require('mongoose');
//const { DB_URI } = require('./config');

const DB_URI = process.env.DB_URI;

module.exports = () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', console.error.bind(console, 'DB connected'));
};

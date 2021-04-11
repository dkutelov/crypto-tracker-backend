const express = require('express');
const cors = require('cors');
const { auth } = require('../middlewares/auth');

module.exports = (app) => {
  app.use('/static', express.static('public'));
  app.use(cors());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(auth);
};

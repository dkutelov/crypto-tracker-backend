const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = async (username, password) => {
  let usernameTaken = await User.findOne({ username });

  if (usernameTaken) throw { message: 'User already exisits' };

  const createdUser = await new User({ username, password }).save();

  let token = jwt.sign(
    {
      id: createdUser._id,
      username: createdUser.username,
    },
    SECRET,
    { expiresIn: '1h' }
  );

  return { id: createdUser._id, username: createdUser.username, token };
};

const login = async (username, password) => {
  let user = await User.findOne({ username });

  if (!user) throw { message: 'No such user' };

  const areEqual = await bcrypt.compare(password, user.password);

  if (!areEqual) throw { message: 'Invalid password' };

  let token = jwt.sign({ _id: user._id, username: user.username }, SECRET, {
    expiresIn: '1h',
  });
  return {
    id: user._id,
    username: user.username,
    token,
  };
};

module.exports = {
  register,
  login,
};

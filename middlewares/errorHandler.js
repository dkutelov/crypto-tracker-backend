const errorHandler = (err, req, res) => {
  // {
  //     message: 'asdasdasd',
  //     type: 'error',
  //     statusCode: 500
  // }
  console.log('error handler', err.err.message);
  err.status = err.status || 500;
  err.message = err || err.message || 'Something went wrong';

  res.status(err.status).json({ message: err.message });
};

module.exports = errorHandler;

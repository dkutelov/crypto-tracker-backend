const app = require('express')();

require('./config/mongoose')();
require('./config/express')(app);
const PORT = 4000;
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

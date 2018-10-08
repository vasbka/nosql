const express = require('express');

//init
const app = express();

//routes
const userRoutes = require('./controller/routes/user');
const configurationRoutes = require('./controller/routes/db-handler');
const customerRouters = require('./controller/routes/customer');

app.use('/configuration', configurationRoutes);
app.use('/user', userRoutes);
app.use('/customer', customerRouters);

app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: 'sorry'
    }
  });
});

const port = 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));

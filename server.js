const express = require('express');

//init
const app = express();

//routes
const configurationRoutes = require('./controller/routes/configuration/db');
const usersRouters = require('./controller/routes/user/user')

app.use('/configuration', configurationRoutes);
app.use('/user', usersRouters);

app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {0
  res.status(error.status || 500);
  res.json({
    error: {
      message: 'sorry'
    }
  });
});

const port = 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));

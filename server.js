const express = require('express');
const session = require('express-session');
//init
const app = express();
app.use(session({secret: "Shh, its a secret!"}));
//routes
const userRoutes = require('./controller/routes/user');
const configurationRoutes = require('./controller/routes/db-handler');
const customerRouters = require('./controller/routes/customer');



app.use('/configuration', configurationRoutes);
app.use('/user', userRoutes);
app.use('/customer', customerRouters);

app.use((error, req, res, next) => {0
  res.status(error.status || 500);
  res.json({
    error: error
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

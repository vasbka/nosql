const express = require('express');
//init
const app = express();
const bodyParser = require("body-parser");
// app.use(session({secret: "Shh, its a secret!"}));
//routes
const userRoutes = require('./controller/routes/user');
const configurationRoutes = require('./controller/routes/db-handler');
const customerRouters = require('./controller/routes/customer');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/configuration', configurationRoutes);
app.use('/user', userRoutes);
app.use('/customer', customerRouters);

app.use((error, req, res, next) => {0
  res.status(error.status || 500);
  res.json({
    error: error
  });
});

const port = 5444;

app.listen(port, () => console.log(`Server started on port ${port}`));

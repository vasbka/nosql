const express = require('express');

const app = express();

const productRoutes = require('./api/routes/products');

app.use('/products', productRoutes);

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

// app.get('/api/customers', (req, resp) => {
//   const customers = [
//     {id: 0, firstName: 'Vasyl', lastName: 'honcharenko'},
//     {id: 1, firstName: 'one', lastName: 'one'},
//     {id: 2, firstName:  'some', lastName: 'some'}
//   ];
//   resp.json(customers);
// })

const port = 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/', (req, res, next) => {
  // try {
  //   var resl = pool.query('');
  // } catch(err) {
  //   throw new Error(err);
  // }
  res.status().json({
    hello: "1"
  });
});

router.get('/getAll', (req, res, next) => {
  var res;
  try {
    pool.query('SELECT * FROM user;', function(err, res, fields) {
      console.log(err);
      console.log(res);
    });
  } catch(err) {
    throw new Error(err);
  }
  res.status(200).json({
    res: res
  });
})

router.post('/reset', (req, res, next) => {
  res.status(200).json({
    res: models.rmAll()
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get('/', (req, res, next) => {
  try {
    var resl = pool.query('SELECT * FROM user', function (err, res, field) {
      console.log(res);
    });
  } catch(err) {
    throw new Error(err);
  }
  console.log(resl);
  res.status(200).json({
    users: resl
  });
});

module.exports = router;

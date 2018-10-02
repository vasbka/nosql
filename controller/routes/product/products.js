const express = require('express');
const router = express.Router();
const pool = require('../../db')

router.post('/', (req, res, next) => {
  try {
    var res = pool.query('INSERT INTO users(id, firstName) values (0, "honcharenko");');
  } catch(err) {
    throw new Error(err);
  }
  console.log(err);
  res.status(200).json({
    res: res
  });
});

module.exports = router;

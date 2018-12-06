const express = require('express');
// const sesssion = require('express-session');

const router = express.Router();
const pool = require('../db');

router.get('/', (req, res, next) => {
  var res;
  try {
    pool.query('SELECT * FROM faculty;', function(err, rs, fields) {
      res.status(200).json(
        JSON.parse(JSON.stringify(rs))
      )
    });
  } catch(err) {
    throw new Error(err);
  }
  res.status(500);
});

module.exports = router;

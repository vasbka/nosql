const express = require('express');
// const sesssion = require('express-session');

const router = express.Router();
const pool = require('../db');

router.get('/', (req, res, next) => {
  var res;
  try {
    pool.query('SELECT * FROM enrollee;', function(err, rs, fields) {
      res.status(200).json(
        JSON.parse(JSON.stringify(rs))
      )
    });
  } catch(err) {
    throw new Error(err);
  }
  res.status(500);
});
router.post('/add', (req, res, next) => {
  var user = req.body;
  try{
    pool.query('INSERT INTO enrollee(firstName, lastName, login, password, email) VALUES (?, ?, ?, ?, ?)',
      [user.firstName, user.lastName, user.login, user.password, user.email], function(err, res, filds) {
        if(err) throw err;
      })
  } catch(err) {
    throw new Error(err);
    res.status(400).json(
      JSON.parse(JSON.stringify(err))
    )
  }
  res.status(200).json();
});

module.exports = router;

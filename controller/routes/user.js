const express = require('express');
const sesssion = require('express-session');
const router = express.Router();
const pool = require('../db')
var session;

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

router.get('/create', (req, res, next) => {
  session = req.session;
  session.role = "qewr";
  res.status(200).json(
    // res: models.rmAll()
    // res: "success"
    JSON.parse(JSON.stringify(session.role))
  );


});

module.exports = router;

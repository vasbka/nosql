const express = require('express');
const router = express.Router();
const pool = require('../../db')

router.get('/rmAll', (req, res, next) => {
  try {
    var resl = pool.query('DROP TABLE IF EXISTS users;');
  } catch(err) {
    throw new Error(err);
  }
  res.status(200).json({
    result: resl
  });
});

router.get('/init', (req, res, next) => {
  // try {
  //   var resl = pool.query(`
  //     CREATE TABLE user (
  //       id INT NOT NULL,
  //       firstName varchar(255) NOT NULL,
  //       lastName varchar(255) NOT NULL,
  //       nick varchar(255) NOT NULL
  //     );`
  //    );
  // } catch(err) {
  //   throw new Error(err);
  // }
  // try {
  //   var resl = pool.query(`
  //     INSERT INTO user VALUES (0, "vasyl", "honcharenko", "vsb");`
  //    );
  // } catch(err) {
  //   throw new Error(err);
  // }
  res.status(200).json({
    res: resl
  });
});




module.exports = router;

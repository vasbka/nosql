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

router.get('/:attrName/:attrValue', (req, res, next) => {
  var res;
  try {
    pool.query(
      'SELECT * FROM faculty WHERE ?? = ?;',
      [req.params.attrName, req.params.attrValue],
      function(err, rs, fields) {
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
  var faculty = req.body;
  try{
    pool.query('INSERT INTO faculty(name, generalCount, budgetCount) VALUES (?, ?, ?)',
      [faculty.name, faculty.generalCount, faculty.budgetCount], function(err, res, filds) {
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


router.post('/delete', (req, res, next) => {
  try{
    pool.query('DELETE FROM faculty WHERE id = ?', req.body.id, function(err, res, fields) {
      if(err) throw err;
    })
  } catch(err) {
    res.status(400).json(
      JSON.parse(JSON.stringify(err))
    )
  }
  res.status(200).json();
});


router.post('/update', (req, res, next) => {
  var faculty = req.body;
  try{
    pool.query('UPDATE faculty SET name = ?, generalCount = ?, budgetCount = ? WHERE id = ?',
      [faculty.name, faculty.generalCount, faculty.budgetCount, faculty.id],
      function(err, res, fields) {
      if(err) throw err;
    })
  } catch(err) {
    res.status(400).json(
      JSON.parse(JSON.stringify(err))
    )
    return;
  }
  res.status(200).json(JSON.parse(JSON.stringify(faculty)));
});

module.exports = router;

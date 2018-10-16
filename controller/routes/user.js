const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/', (req, res, next) => {
  let results;
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

})
router.post('/reset', (req, res, next) => {
  res.status(200).json({
    res: models.rmAll()
  });
});

module.exports = router;

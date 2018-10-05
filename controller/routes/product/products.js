const express = require('express');
const router = express.Router();
const models = require('../configuration/db.js')

router.get('/reset', (req, res, next) => {
  console.log("GET");
  res.status(200).json({
    res: models.rmAll()
  });
})
router.post('/reset', (req, res, next) => {
  res.status(200).json({
    res: models.rmAll()
  });
});

module.exports = router;

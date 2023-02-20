/* Name: Kevin Dalling
   ID#: 301247589
   Date: February 19, 2023
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

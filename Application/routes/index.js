/* Name: Kevin Dalling
   ID#: 301247589
   Date: February 4, 2023
*/

var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

/* POST Contact Me page. */
router.post('/contact',function(request,response){
  console.log(request.body) 
  // store information entered into text file
  fs.appendFile("stored_info_from_user.txt",JSON.stringify(request.body),function(err){
    if(err) throw err;
  });
  response.render('index', { title: 'Home' });

});

module.exports = router;

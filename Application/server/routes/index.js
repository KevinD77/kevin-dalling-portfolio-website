/* Name: Kevin Dalling
   ID#: 301247589
   Date: February 19, 2023
*/

let express = require('express');
let router = express.Router();

const fs = require('fs');

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/',indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);

/* GET About Me page. */
router.get('/about',indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects',indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services',indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact',indexController.displayContactMePage);

/* POST Contact Me page. */
router.post('/contact',function(request,response){
  console.log(request.body) 
  // store information entered into text file
  fs.appendFile("stored_info_from_user.txt",JSON.stringify(request.body),function(err){
    if(err) throw err;
  });
  response.render('index', { title: 'Home' });

});

/* GET Route for displaying the login Page */
router.get('/login',indexController.displayLoginPage);

/*  POST Route for processing the login Page */
router.post('/login',indexController.processLoginPage);

/* GET Route for displaying the registration Page */
router.get('/register',indexController.displayRegisterPage);

/*  POST Route for processing the registration Page  */
router.post('/register',indexController.processRegisterPage);

/*  Get Route to perform user log out */
router.get('/logout',indexController.performLogout);

module.exports = router;

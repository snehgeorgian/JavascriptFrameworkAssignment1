var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Get about */
router.get('/about', function(req, res)  {
  res.render('about', { title: "  About Sneh " })
})

/* Get  portfolio*/
router.get('/Portfolio', function(req, res)  {
  res.render('Portfolio', { title: "  My Portfolio " })
})


/* Get about */
router.get('/art', function(req, res)  {
  res.render('art', { title: "  art  " })
})



module.exports = router;

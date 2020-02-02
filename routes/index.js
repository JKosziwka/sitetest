var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

router.get('/chip', function(req, res, next) {
  res.render('chip', { title: 'CHIP Learn to play program' });
});

router.get('/teams', function(req, res, next) {
  res.render('teams', { title: 'Rep Teams' });
});

router.get('/development', function(req, res, next) {
  res.render('development', { title: 'Development' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'FAQ' });
});

module.exports = router;

const express = require('express');
const router = require('express').Router();
const request = require('request');
const passport = require('passport');
const rootURL = 'https://wger.de/api/v2';

// The root route renders our only view
router.get('/', function(req, res, next) {
  // Where do you want to go for the root route
  res.render('index');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', 
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;

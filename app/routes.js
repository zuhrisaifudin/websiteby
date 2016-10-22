var express = require('express');
var path	= require('path');

// create our router object
var router 	= express.Router();

// export our router

module.exports = router;

// all router

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../index.html'));
});

// route from contact

router.get('/contact', function(req, res){
	res.sendFile(path.join(__dirname, '../contact.html'));
});

router.post('/contact', function(req, res){
	res.sendFile(path.join(__dirname, '../curriculum.html'))
});


// route for my Cv

router.get('/curriculum', function(req, res){
	res.sendFile(path.join(__dirname,'../curriculum.html'));
});
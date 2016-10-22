

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;



//route the app

var router = require('./app/routes');
app.use('/', router);

//use body parser

app.use(bodyParser.urlencoded());

// For css 

app.use(express.static(__dirname + '/public'));

// start the server 

app.listen(port, function(){
	console.log('Selamat Aplikasi Anda Berjalan di ' + port);
});

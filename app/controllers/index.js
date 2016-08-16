var express = require('express');
var router = express.Router();
var fs = require('fs');

module.exports = function(app) {
	app.use('/', router);
};

router.get('/', function(req, res, next) {
	res.render('index', {
		title : 'Welcome!'
	});
});

router.get('/project*', function(req, res) {
	fs.readFile(__dirname.substr(0,4) + req.originalUrl, function (err,data){
		res.contentType("application/pdf");
		res.send(data);
	});
});
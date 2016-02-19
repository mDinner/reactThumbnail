var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path 	   = require('path');
var ejs        = require('ejs');




// app config
app.use(bodyParser());
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.set('views', path.join(__dirname, '.'));
app.use(express.static(__dirname + '/public'));



app.get("/", function(req,res){

    res.render("index");

});


//mongoose.connect('mongodb://localhost/test');

var port = process.env.PORT || 8000;
app.listen(port);
console.log('now serving on port ' + port);
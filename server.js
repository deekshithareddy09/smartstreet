var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var application_root = __dirname;


//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());
app.use(express.static(application_root));

app.get('/myaction', function(req, res) {
  console.log("I am in action");
  res.send('You sent the name "' + req.body.name + '".');
});

app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});
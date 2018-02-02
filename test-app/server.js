var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
// var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/nytReact");
// mongoose.connect('mongodb://localhost/dbname', function(err) {
//     if (err) throw err;
//     console.log("mongoose working!!")
// });

app.listen(PORT, function() {

	console.log("app listening on PORT:", PORT);
});




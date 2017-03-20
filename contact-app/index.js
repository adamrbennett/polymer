var express = require('express');
var app = express();
var port = process.argv[2] || 3000;

app.use(express.static('.'));

app.listen(port);

console.log("Listening at localhost:" + port);

var express = require('express');
var app = express();
var port = process.argv[2] || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('bower_components'));
app.use(express.static('.'));

app.listen(port);
process.on('SIGINT', close);
process.on('SIGTERM', close);

console.log(`Listening on port: ${port}`);

function close() {
  console.log('Shutting down');
  server.close();
  process.exit(0);
}
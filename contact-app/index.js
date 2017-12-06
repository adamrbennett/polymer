var express = require('express');
var app = express();
var port = process.argv[2] || 3000;

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
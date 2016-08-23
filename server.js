var express = require('express');
var path = require('path');
var app = express();
app.use('/', express.static(path.join(__dirname)));
app.get('/*', function( req, res ) {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
})
app.listen(8000,function() {
  console.log("Server started at 8000 port");
})

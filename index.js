var express = require('express');
var app = express();
var fs = require("fs");
var port = process.env.PORT || 8080;
app.get('/listOrders', function (req, res) {
   fs.readFile( __dirname + "/" + "orders.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/orders/:email', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "orders.json", 'utf8', function (err, data) {
	  console.log(req.params.email); 
	  console.log(JSON.parse( data ));
      var users = JSON.parse( data );
      var user = users["orders"]
	  
      console.log( user );
	  var picked = user.filter(o => o.email === req.params.email);
	  console.log(picked) 
      res.end( JSON.stringify(picked));
   });
})
var server = app.listen(port, function () {

  var host = server.address().address
  

  console.log("Example app listening at http://%s:%s", host, port)

})


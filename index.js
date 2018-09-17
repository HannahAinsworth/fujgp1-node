//we are going to create a web server using the express package (npm install express --save)
//now we will import (require) express
var express = require('express');
var app = express();

//listen for a http request to the root of our express web server
app.get('/',function(request,response){
  console.log('Request made to root of the server');
  response.send('Home page will go here');
});



//now declare the port for our server to run on
app.listen(3000,function(){
  console.log('App running on port 3000');
});

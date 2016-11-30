var express = require('express');
//access to the entire express api, require is a node keyword and load in the moudle

// create our app
//var app express library called as a function and no args.
var app = express();
//heroku
const PORT = process.env.PORT || 3000;
//tell it which folder u want to serve
//app.use add functionality to ur express apps
//express.static is gonna specify a folder name u want to expose to the server
//in this case public is the folder

//open weather maps only operates on http not https on free version
//so we r gonna redirect all https traffic over http.
//needs to be above app.use on line 32.
//common pattern for => express middleware =>lets u dosomething with every request
//req => the request that comes in for the file might be index.html or bundle.js
//res => response update what gets sent back
//next=> we call it when the middleware is done
//all we do here is see if the traffic is over http
//if it is great we can all next n move on
//is it isnt redirect them
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
  res.redirect('http://' + req.hostname + req.url);
  } else {
      next();
  }
});

app.use(express.static('public'));
//now start the server
//app.listen takes 2 args first PORT and then the fn to call once the server is up.
app.listen(PORT,function(){
  console.log('express server is up on PORT ' + PORT);
});
//in the root of the app create the public folder--helloReact

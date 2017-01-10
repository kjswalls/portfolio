/* Require Express, initialize it into app,
and pass app to the http module as a web server */

var express = require('express');
var app = express();
var http = require('http').Server(app);

/* Include the path module for safely resolving relative paths,
 for use with res.sendFile */

var path = require('path');

/* Set public directory for serving static files from express, per:
http://expressjs.com/en/starter/static-files.html */

app.use(express.static(__dirname));

// Define a route handler to serve responses when the home page is requested

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

/* Set the web server to listen on port 5000, or the environment port variable if there is one, as per:
http://stackoverflow.com/questions/28706180/setting-the-port-for-node-js-server-on-heroku */

var port = process.env.PORT || 5000;
http.listen(port, function() {
    console.log('listening on *: ' + port);
});

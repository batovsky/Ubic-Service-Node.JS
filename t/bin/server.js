var http = require('http');
var httpserver = http.Server();

console.error('Trying to start');
httpserver.on("error", function (err) {
    console.log(err.stack);
    });

httpserver.on("request", function (request, response) {
    if (request.url === "/") { 
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write('node process env ' + JSON.stringify(process.env) );
      response.end();
    }
    
    else {
      console.warn(request.url + ' not found');
      response.writeHead(404);
      response.end();
    }
});

var port = process.env.PORT || 9000;
httpserver.listen(port);

console.log((new Date()).toLocaleTimeString() + ' Server listening on port '+port);


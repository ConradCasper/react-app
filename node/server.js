var http = require('http');
var urlParser = require('url'); // Adds urlParser

var server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
    var urlObj  = urlParser.parse( request.url ); //
var pathname = urlObj.pathname; // parsing our the important info in the url

console.log("requested: " + pathname);

  console.log(request.url);

// If the variable pathname is /fun-times build x response 
// else if the variable pathname is /movies build y response 
// else if the variable pathname is /portfolio build z response 
// else build a 404 response

if (pathname == '/fun-times'){
    response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html><h1>Fun Times!</h1>');
  response.write('<ul><li>smoke weed</li></ul>');
  response.write('</html>');
  response.end();
} else if (pathname == '/movies'){
    response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html><h1>Favorite Movies</h1>');
  response.write('<ul><li>django unchained</li></ul>');
  response.write('</html>');
  response.end();
} else if (pathname == '/portfolio'){
    response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html><h1>Coming Soon</h1>');
  response.write('</html>');
  response.end();
} else {

  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html>Hello World!');
  response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
  response.write('</html>');
  response.end();

}
});


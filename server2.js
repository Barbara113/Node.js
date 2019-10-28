let http = require('http');

function onRequest(request, response){
    response.writeHead(200,{'Content-type': 'text/plain'});
    response.write('This is my first app');
    response.end();


}

http.createServer(onRequest).listen(10000);

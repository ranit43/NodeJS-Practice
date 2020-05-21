var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/api') {
        res.writeHead(200, { 'content-type': 'application/JSON' });
        var objToSend = {
            firstName: 'Tanmoy',
            lastName: 'Debnath',
            Work: 'Doctor'
        }
        res.end(JSON.stringify(objToSend));
    }
    else if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(__dirname + '/HelloTestStreams.htm').pipe(res)
    }
    else {
        res.writeHead(404);
    }
}).listen(1337, '127.0.0.1');
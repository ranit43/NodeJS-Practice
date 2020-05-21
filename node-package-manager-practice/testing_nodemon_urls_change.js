var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        console.log(__dirname + '/nodeMonTest.htm');
        fs.createReadStream(__dirname + '/nodeMonTest.htm').pipe(res);
    }
    else if (req.url === '/json') {
        res.writeHead(200, { 'content-type': 'application/json' });
        var objToSend = {
            name: 'Maitro',
            quirk: 'Do not pay their Workers'
        }
        res.end(JSON.stringify(objToSend));
    }
    else {
        res.writeHead(404);
        fs.createReadStream(__dirname + '/notFound.htm').pipe(res);
        // res.end('Not available Right Now');
    }
}).listen(1552, '127.0.0.1');
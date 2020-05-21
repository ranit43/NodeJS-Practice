var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/JSON' });
    var senObj = {
        name: 'Tanmoy',
        Work: 'Doctor'
    }
    // res.end(senObj.toString());
    res.end(JSON.stringify(senObj));
}).listen(1337, '127.0.0.1');
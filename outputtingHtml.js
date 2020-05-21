var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    var testHtmPage = fs.readFileSync(__dirname + '/HelloTest.htm', 'utf8');
    testHtmPage = testHtmPage.replace('{endMessage}', 'Love Love!')
    res.end(testHtmPage);
}).listen(1337, '127.0.0.1');
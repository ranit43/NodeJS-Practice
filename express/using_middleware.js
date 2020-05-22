var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'))

app.use('/', function (req, res, next) {
    console.log('Requested URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    fs.createReadStream(__dirname + '/Person.htm').pipe(res);
});

app.get('/api', function (req, res) {
    objToSend = {
        name: 'Algorithm Design',
        Author: 'Jon K., Eva T.',
        review: '****'
    };
    res.json(objToSend);
});

app.listen(port);
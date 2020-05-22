var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
    fs.createReadStream(__dirname + '/test_hello.htm').pipe(res);
});

app.get('/json/:id/:uname', function (req, res) {
    objToSend = {
        name: 'Algorithm Design',
        Author: 'Jon K., Eva T.',
        review: 'good',
        viewedBy: req.params.id,
        userName: req.params.uname
    }
    res.json(objToSend);
})

app.get('/json', function (req, res) {
    objToSend = {
        name: 'Algorithm Design',
        Author: 'Jon K., Eva T.',
        review: 'good'
    }
    res.json(objToSend);
})

app.listen(1552);
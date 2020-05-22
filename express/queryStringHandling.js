var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.use('/', function (req, res, next) {
    console.log('Requested URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/registration', function (req, res) {
    res.render('reg');
});

app.post('/registration', urlencodedParser, function (req, res) {
    console.log('Registration Submitted Data');
    console.log('User Name:  ' + req.body.username);
    console.log('Age:  ' + req.body.age);
    res.send("You will be registered later!!");
});

app.post('/userjson', jsonParser, function (req, res) {
    res.send("Got the user info! Thanks!");
    console.log('User Name: ' + req.body.userName);
    console.log('Country:  ' + req.body.country);
});

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.listen(port);
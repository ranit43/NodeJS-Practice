var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var htmlController = require(__dirname + '/controllers/htmlController');

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Hit Url : ' + req.url);
    next();
});

htmlController(app);

app.listen(port);




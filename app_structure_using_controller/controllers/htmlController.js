var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    })

    app.get('/register', function (req, res) {
        res.render('reg');
    });

    app.post('/register', urlencodedParser, function (req, res) {
        console.log('Book Title: ' + req.body.bookTitle);
        console.log('Author Title: ' + req.body.bookAuthor);
        res.send('Thanks for submitting the book!');
    });
}
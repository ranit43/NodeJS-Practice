var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app, Book) {
    app.get('/', function (req, res) {
        res.render('index');
    })

    app.get('/register', function (req, res) {
        res.render('reg');
    });

    app.post('/register', urlencodedParser, function (req, res) {

        //new instances or versions of the object (mogoose object) that follows the 
        var nRegBook = Book({
            bookname: req.body.bookTitle,
            numberofauthor: req.body.numberOfAuthor,
            authors: req.body.bookAuthor,
            pages: req.body.numberOfPages
        });

        nRegBook.save(function (err) {
            if (err) throw err;
            console.log('Book saved!');
        })

        // res.send('Thanks for submitting the book!');

        Book.find({}, function (err, books) {
            if (err) throw err;
            //objects of all the books
            console.log(books);
            res.send(books);
        });
        // res.send()
    });
}
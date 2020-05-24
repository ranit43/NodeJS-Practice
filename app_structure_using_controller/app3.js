var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testDbUser:testDbUserPass@cluster0-isyww.mongodb.net/BookDB?retryWrites=true&w=majority')

//provided constructor from mongoose
var Schema = mongoose.Schema;

//Creating a Schema with structure of the data of the Schema names and types of data it will store
var bookSchema = new Schema({
    bookname: String,
    numberofauthor: Number,
    authors: String,
    pages: Number
});

//Model function constructor which generates a object which will use structure above
var Book = mongoose.model('Book', bookSchema);

//new instances or versions of the object (mogoose object) that follows the 
// var algoDesign = Book({
//     bookname: 'Algorithm Design',
//     numberofauthor: 2,
//     authors: 'K T',
//     pages: 1020
// });

// algoDesign.save(function (err) {
//     if (err) throw err;
//     console.log('Book saved!');
// })

var port = process.env.PORT || 3000;
var htmlController = require(__dirname + '/controllers/htmlController');

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Hit Url : ' + req.url);
    Book.find({}, function (err, books) {
        if (err) throw err;
        //objects of all the books
        console.log(books);
        console.log(books[0].bookname);
    });

    // Book.update({ _id: '5eca4feaaf83ed3ba8372eae' }, { pages: 730 }, function (err, data) {
    //     if (err) throw err;

    //     console.log("Returned after Update: " + JSON.stringify(data));
    // });

    // Book.deleteOne({ _id: '5eca5107a0df030be0071648' }, function (err, data) {
    //     if (err) throw err;

    //     console.log("Returned after DeleteOne: " + JSON.stringify(data));
    // });

    next();
});

htmlController(app);

app.listen(port);




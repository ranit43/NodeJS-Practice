var util = require('util');

function Book() {
    this.bookName = 'Algorithm Design';
    this.author =  'Steven Skeina';
}

Book.prototype.read = function() {
    Book.call(this);
    console.log(`Reading ${ this.bookName} by ${this.author} of ${this.algorithmIncluded} algorithms`);
}

function Algorithm( totAlgo) {
    this.algorithmIncluded = totAlgo;
}

util.inherits(Algorithm, Book);

var algDesignMan = new Algorithm(209);
algDesignMan.read()
// algDesignMan.read();


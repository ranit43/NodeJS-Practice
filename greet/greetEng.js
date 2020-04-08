var greetingJson = require('./greetings.json');

var greet = function() {
    // console.log("Hello Friend");
    console.log(greetingJson.en);
}

module.exports = greet;

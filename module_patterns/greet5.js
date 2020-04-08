//revealing module patterns

var greeting = 'Hello with the object literals but not exposing the variable';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}
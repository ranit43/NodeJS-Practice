//returning a object as a exports

function GreetObject() {
    this.greeting = 'from the greetObject';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new GreetObject();
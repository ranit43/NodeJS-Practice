// not giving the new object just returning the class the ability to create a new object
function GreetObject() {
    this.greeting = 'Giving the greetObject Class';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = GreetObject;
function greet() {
    console.log("Hi");
}
greet();

// functions are first-class
function logGreeting(fnName) {
    console.log('Entered in logGreeting()');
    fnName();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hello Ranit from greetMe()');
}
greetMe();

// console.log('print var ', greetMe);
logGreeting(greetMe);

//use a function expression ion the fly
logGreeting( function() {
    console.log('Hello Ranit using a function exjpression on the fly');
});

'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    callByName() {
        console.log(`Hey ${this.firstName} ${this.lastName}!`);
    }
}

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.callByName = function() {
//     console.log(`Hey ${this.firstName} ${this.lastName}!`);
// };

var lopa = new Person('Lopa', 'Bhowmik');
lopa.callByName();

var ranit = new Person('Ranit', 'Debnath');
ranit.callByName();


console.log(lopa.__proto__);
console.log(ranit.__proto__);
console.log(lopa.__proto__ == ranit.__proto__);
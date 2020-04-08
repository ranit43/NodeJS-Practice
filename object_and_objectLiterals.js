var person = {
    firstName: 'Lopa',
    lastName: 'Bhowmik',
    greet : function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
}
person.greet();
console.log( person['firstName']);
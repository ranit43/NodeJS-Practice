var person = {
    firstName: '',
    lastName: '',
    callByname: function() {
        return 'Hey, ' + this.firstName + ' ' + this.lastName;
    }
}

//it's an empty object and its' prototype person
var lopa = Object.create(person);

lopa.firstName = 'Lopa';
lopa.lastName = 'Bhowmik';

var ranit =  Object.create(person);

ranit.firstName = 'Ranit';
ranit.lastName = 'Debnath';

console.log(lopa.callByname());
console.log(ranit.callByname());

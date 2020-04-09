// object properties and methods

var obj = {
    message: 'Love you Lopa'
}

console.log(obj.message);
console.log(obj['message']);

var mem = 'message';

console.log(obj[mem]);

// function and arrays

var arr = [];

arr.push(function() {
    console.log('Love you dear');
});

arr.push(function() {
    console.log('Love you honey');
});

arr.push(function() {
    console.log('Love you sweetheart');
});

arr.forEach(function(item) {
    item();
});
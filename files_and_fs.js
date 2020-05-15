var fs = require('fs');

var cookFile = fs.readFileSync(__dirname+'/fileReadDemo.txt', 'utf8');
console.log(cookFile);

var cookFile2 = fs.readFile(__dirname+'/fileReadDemo.txt', 'utf8', function(err, data) {
    console.log('Asynch Read print Starts');
    console.log(data);
});

console.log('End of Program Command');
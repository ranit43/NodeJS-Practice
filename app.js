// is require depracted? it's showing a ... bar under the requrie function
// look for require vs import in the web

// var a = 1;
// var b =2;
// var c = a + b;

// console.log(c);
// var greetRanit = require('./build_a_module')
// greetRanit();


// var greet = require('./greet');
// greet.greetEng();
// greet.greetSpanish();
// console.log('Bye bye from app.js');


// /**
//  * Next set of codes are for module_patters testing
//  */
// var greet1 = require('./module_patterns/greet1');
// greet1();

// var greet2 = require('./module_patterns/greet2').greet;
// // greet2.greet();
// greet2();

// var greet3 = require('./module_patterns/greet3');
// greet3.greet();
// greet3.greeting = 'Changed the greeting to check if the later rquires points to the previous ones';

// var greet3_again_require = require('./module_patterns/greet3');
// greet3_again_require.greet();

// var Greet4 = require('./module_patterns/greet4');
// var greeter4 = new Greet4();
// greeter4.greet();

// var greet5 = require('./module_patterns/greet5').greet;
// greet5();

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('episodeWatched', function() {
    console.log('Somebody watched an episode');
});

emtr.on('episodeWatched', function() {
    console.log('A Seinfeild episode is watched');
});

console.log('Bubble Boy Watched after watching The Trip!');
emtr.emit('episodeWatched');
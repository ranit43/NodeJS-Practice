// var Emitter = require('./emitter');
var Emitter = require('events');
var eventConfig = require('./configEvent').events;

var emtr = new Emitter();

emtr.on(eventConfig.EPISODEWATCHED, function() {
    console.log('Somebody watched an episode');
});

emtr.on(eventConfig.EPISODEWATCHED, function() {
    console.log('A Seinfeild episode is watched');
});

console.log('Bubble Boy Watched after watching The Trip!');
// emtr.emit('episodeWatched');
emtr.emit(eventConfig.EPISODEWATCHED);
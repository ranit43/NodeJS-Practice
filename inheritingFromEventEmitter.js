var EventEmitter = require('events');
var util = require('util');

function Watching(seriesName) {
    this.series = seriesName;
}

util.inherits(Watching, EventEmitter);

Watching.prototype.watch = function(watcherName) {
    console.log(watcherName + ' started watching ' + this.series);
    this.emit('watch', watcherName);
}

var watchTracker = new Watching('Seinfeld');

watchTracker.on('watch', function(watcherName) {
    console.log('Someone watched it, guess Who? - ' + watcherName);
});

watchTracker.watch('Lopa');
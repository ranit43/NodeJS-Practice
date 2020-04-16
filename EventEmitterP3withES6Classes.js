'use strict';

var Watcher = require('./Watcher');

var watchTracker = new Watcher('Seinfeld');

watchTracker.on('watch', function(watcherName) {
    console.log('Someone watched it, guess Who? - ' + watcherName);
});

watchTracker.watch('Lopa');

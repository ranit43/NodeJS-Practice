'use strict';

var EventEmitter = require('events');
// var util = require('util');

module.exports =  class Watcher extends EventEmitter {
    constructor(seriesName) {
        super();
        this.series = seriesName;
    }

    watch(watcherName) {
        console.log( `${watcherName} started watching  ${this.series}`);
        this.emit('watch', watcherName);
    }
}

// function Watching(seriesName) {
//     this.series = seriesName;
// }

// util.inherits(Watching, EventEmitter);

// Watching.prototype.watch = function(watcherName) {
//     console.log(watcherName + ' started watching ' + this.series);
//     this.emit('watch', watcherName);
// }
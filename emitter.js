function Emitter() {
    this.events = {}
    // this.events = {
    //     prop: []
    // }
}

//what will happen when the emitter will be called upon
Emitter.prototype.on = function(type, listener) {
    //events property is an object and type is a property of the events and I want this property to be an array
    this.events[type] = this.events[type] || [];
    // pushing the listener function in the array
    this.events[type].push(listener); 
}

// what will happen after it had happened
Emitter.prototype.emit = function(type) {
    if(this.events[type]) { //if this property exists in the object
        this.events[type].forEach( function(listener) {
            listener();
        });
        
        // this.events[type].array.forEach(element => {
        //     element();
        // });
    }
}

module.exports = Emitter;
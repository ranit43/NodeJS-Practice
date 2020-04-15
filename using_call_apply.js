var serialObj = {
    name: 'Seinfeld',
    serWatch: function() {
        console.log(`Now watching ${this.name}`);
    }
}

serialObj.serWatch();

// will have to pass the paramaters as a list of parameters
serialObj.serWatch.call( { name: 'The office' } );

//will have to pass the other params as an array of parameters
serialObj.serWatch.apply({ name: 'Little Things'}); 
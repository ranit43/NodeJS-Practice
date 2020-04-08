// moduels are self containted. We can declare two variables with th same in two different module and they won't collide

var greetRanit = function() {
    console.log('hello Ranit');
}

module.exports = greetRanit;
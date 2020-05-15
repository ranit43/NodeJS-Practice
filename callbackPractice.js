function cook( callBackFunname )
{
    console.log('Cooking!');
    var prettyLady = {
        name: 'Lopa Bhowmik'
    };
    
    callBackFunname(prettyLady);
}

cook(function(prettyLady) {
    console.log('it is the call back function which is now invoked');
    console.log(prettyLady);
});

cook(function(prettyLady) {
    console.log('Another call back function which is now invoked');
    console.log(prettyLady.name);
});


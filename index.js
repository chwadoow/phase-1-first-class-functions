function receivesAFunction (callback) {
    return  callback() ;
    }

function returnsANamedFunction(){
    return function named(){
        console.log("moz")

    };
}
function returnsAnAnonymousFunction (){
    return function () {
        console.log("moz")
    }; 
}

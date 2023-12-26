function add(a, b){
    return a+b
}

function manipulation(a, b, func){
    var s = a + b
    var d = a - b

    // function multiply(){
    //     var m = func( a, b)
    //     return s * d * m
    // }

    //1. return function from another function
    return  function (){
        var m = func( a, b)
        return s * d * m
    }
}

//2. pass function as an argument
var multiplication = manipulation(6, 4, add)
console.log(multiplication())
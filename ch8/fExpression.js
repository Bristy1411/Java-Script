// // ****we can store a function in a variable using function expression*****
// var add = function addition(a, b){
//     console.log(a+b)
// }
// //this function can call by using the varisble
// add(10, 20)

//****as we can call the function using variable name, then don't have to declare a function name in line 2*****
//so we can write it as
var add = function (a, b){  //a function without a name is called annonymous function, which use in function expression
    console.log(a+b)
}
add(10, 20)

//****we can store the funtion in another variable simply assign this variable to another *****
var addition = add
addition(50, 10)
console.log(typeof addition)

//setTimeout() method calls a function after a number of milisecond =>1 second = 1000 milisecond
//it execute only once, ***setInterval() repeated the function call***
setTimeout(function(){
    console.log('hi')
}, 6000)

console.log('this msg written after hi, but print 1st')
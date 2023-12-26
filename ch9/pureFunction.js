//pure function returns the same value with same arguments
//it does not cause any obserable side effects

function multiply(n){
    return n*n
}
console.log(multiply(3))
console.log(multiply(3))
console.log(multiply(3))

//not a pure function
var n = 10

function number(){
    n = 100
}
number()//change the value of n 
console.log(n)
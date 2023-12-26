function add(a, b){
    return a+b
}

//1. a function can be stored in a variable
var sum = add
console.log(sum(5, 10))
console.log(typeof sum)

//2. a function can be stored in an array
var arr = [1, 2, 3]
arr.push(add)
console.log(arr)
console.log(arr[3](arr[0], arr[2])) //or we can pass any arguments we want
console.log(typeof(arr))

//3. a function can be stored in a object
var obj = {
    x : 4,
    y : 3,
    sum : add
}

console.log(obj)
console.log(obj.sum(5, 6))
//4. we can create function as need 
setTimeout(function () {
    console.log('hii')
},1000);



var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// //Filter function filers some elements from a array and store in a new array depending in the task given to it
// var newArr  = arr.filter(function(value, index, array){
//     return value % 2 === 0
// })

// console.log(newArr)

//defing filer function manually
function myFilerFunction(arr, cb){
    var newArr = []
    for(var i = 0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilerFunction(arr, function(value){
    return value % 2 === 0
}))

console.log(myFilerFunction(arr, function(value){
    return value > 3
}))
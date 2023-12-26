var arr = [1, 2, 3, 4, 5]

//****forEach function to traverse an array*****
var sum = 0
arr.forEach(function(value, index, array){
    //console.log(value , index, arr)
    sum += value
})
console.log(sum)



// //*****implementation of forEach in our way using callback function******
// function foreach(arr, cb){
//     for(var i = 0; i < arr.length; i++){
//         cb(arr[i], i, arr)
//     }
// }

// var sum = 0
// foreach(arr, function(value, index, arr){
//     console.log(value, index, arr)
//     sum += value
// })
// console.log(sum)

// foreach(arr, function(value, index, arr){
//     arr[index] = value + 5
// })
// console.log(arr)
var arr = [1, 2, 3, 4, 5]

// var newArr  = arr.map(function(value, index, array){
//     return Math.pow(value, 2)
// })

// console.log(arr)
// console.log(newArr)

//***implementation of map() function in our way***

function mapFuntion(array, callback){
    var arr2 = []
    for(var i = 0; i < array.length; i++){
        var temp = callback(array[i], i, array)
        arr2.push(temp)
    }
    return arr2
}

var result = mapFuntion(arr, function(value, index, array){
    return Math.pow(value, 2)
})
console.log(arr)
console.log(result)
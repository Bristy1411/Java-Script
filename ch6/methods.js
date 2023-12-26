var arr = [5, 2, 6, 9, 8]

// // join seperate all elements and generate a string
// console.log(arr.join(' '))
// console.log(arr.join(', '))
// console.log(arr.join(' | '))


// // fill take a number and starting, ending index number and fill those indexes with the number
// console.log(arr.fill(9, 1, 3))


//array.from(variable) create a same array and store it in a new variable
var arr1 = Array.from(arr)
console.log(arr)
console.log(arr1)

console.log(Array.isArray(arr1)) //check if the given variable is an array


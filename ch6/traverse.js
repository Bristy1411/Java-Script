var arr = [4, 9, 2, 6, 10, 7, 1]
console.log(arr)
// //traverse array
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

//add 2 with all index value

for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i] + 2
}
console.log(arr)

//sum of array
var s = 0
for(var j = 0; j<arr.length; j++){
    s+=arr[j]
}
console.log(s)

//even numbers from array
evensum=0
for(var k = 0; k<arr.length; k++){
    if(arr[k]%2===0){
        console.log(arr[k])
        evensum += arr[k]
    }
}
console.log(evensum)
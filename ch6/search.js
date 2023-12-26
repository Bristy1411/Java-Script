var arr = [1, 55, 8, 32, 61, 75]
var n = 61
var found = false

for(var i = 0; i<arr.length; i++){
    if(arr[i]===n){
        console.log('data found at index ' + i)
        found = true
        break
    }
}

if(!found){
    console.log('data not found')
}
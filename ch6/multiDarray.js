//*******2 dimentional array********/
var arr = [
    [12, 96, 36],
    [22, 65, 81],
    [31, 85, 61]
]

console.log(arr)

//array traverse
for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr.length; j++){
        console.log('element in '+ i +':'+j +' is '+arr[i][j])
    }
}



// *********3dimensional array*********
var arr2 = [
    [
        [1, 2, 3],
        [4, 5, 6,],
        [51, 56, 57]
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
        [20, 21, 22]
    ],
    [
        [13, 14, 15],
        [16, 17, 18],
        [32, 33, 34]
    ]
]
console.log(arr2)

//array traverse
for(var i = 0; i<arr2.length; i++){
    for(var j = 0; j<arr2.length; j++){
       for(var k = 0; k<arr2.length; k++){
        console.log('element in '+ i +':'+j +':'+k+' is '+arr2[i][j][k])
       }
    }
}

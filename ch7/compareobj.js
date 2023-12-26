var obj1 = {
    x : 10,
    y : 20
}

var obj2 = {
    x : 10,
    y : 20
}

// console.log(obj1 === obj2) //false [it compares memory location of the objects]

// //so we can compare each propertise of the objects
// if(obj1.x === obj2.x && obj1.y === obj2.y){
//     console.log(true)
// }else{
//     console.log(false)
// }

//******we can simply converts the objects into the string and compare them****
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) 
//JSON object provides a method name stringify() which convert objects into string
console.log(JSON.stringify(obj1))
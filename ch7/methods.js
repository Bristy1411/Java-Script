var obj = {
    x : 40,
    y : 60,
    z : 75
}

//display the property names of an object
console.log(Object.keys(obj)) //display as an array

//display values of each property of an  object
console.log(Object.values(obj)) //display as an array

//display key value pair of an object
console.log(Object.entries(obj)) //returns a two dimensional array 

//*******clone an object in a new object*******
var obj2 = Object.assign({}, obj)
console.log(obj2)
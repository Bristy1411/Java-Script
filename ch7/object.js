//object is a data type where we can store different type data in a variable

// //*******object literal******
// var obj = {}
// obj.a = 10
// console.log(obj)


// var obj1 = {
//     x : 12,
//     y : 13
// }

// obj1.z = 14
// console.log(obj1)


// //******object constructor*******
// var point = Object()
// var result = new Object()

// console.log(point)
// console.log(typeof result)


//****accessing object****/
var obj = {
    x : 10,
    y : 20,
    z : 30
}

console.log(obj.x)
console.log(obj.x + obj.y)


//****add and show object propersitse using array notation****
var show = 'x'
console.log(obj[show])

var prop ='a'
obj[prop] = 55
obj['b'] = 85
console.log(obj)


//*****remove propertise from object****
delete obj.b
console.log(obj)

//array in an object
var obj2 = {
    name : ['bristy', 'mahbuba', 'yasmin'],
    age : [23, 25, 24]
}
console.log(obj2)
console.log(obj2.name[1])

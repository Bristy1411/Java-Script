//return something in a function
function sub(x, y){
    var x = x
    var y = y
    var s = y-x
    return s
}
console.log(sub(50, 60))

//return a object from a function
 function person(name, age){
    return {
        name : name,
        age : age
    }
    console.log('hi') //function break aftar returning something
 }

var p1 = person('bristy', 23)
console.log(p1)
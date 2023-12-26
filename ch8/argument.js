//********arguments object********

// function add(a, b, c){
//     console.log(arguments)
// }

// //add()
// add(10, 20, 30)


//******we can pass arguments without declare parameters******
//arguments object provides an array like data type
//where we can access the arguments using agruments index
function add(){
    console.log(arguments)
}
add(10, 20, 30, 40)


//we can perform operations on passing arguments using arguments() object, where we don't know how many arguments will given
function argummentsSum(){
    var sum = 0
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
argummentsSum(4, 5, 6)
argummentsSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


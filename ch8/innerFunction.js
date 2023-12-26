// //****we can define a function into another function****
// function greetings(name, greet){
//     function say(){
//         console.log(greet, name)
//     }
//     say() //the inner function can only call by the outer function
// }

// greetings('bristy', 'hello')


function greetings(greet, name){
    function say(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    var msg = greet + ' ' + say()
    return msg
}

console.log(greetings('hello', 'Mahbuba Bristy'))
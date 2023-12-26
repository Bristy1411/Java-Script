// for(var i = 0 ; i < 10 ; i++){
//     console.log(i + '. My name is Bristy')
// }


//Nested forloop
// var n = 5
// for(i = 1; i <= n; i++){
//     var r = ''
//     for(var j = 1; j<=i ; j++){
//         r += j+' '
//     }
//     console.log(r)
// }


// var n = 5
// for(i = 1; i <= n; i++){
//     var r = ''
//     for(var j = 1; j<=n ; j++){
//         r += '* '
//     }
//     console.log(r)
// }


//infinity for loop

for( ; ; ){
    var r = Math.floor(Math.random() * 10 + 1)
    if(r===9){
        console.log('we got 9')
        break
    }
    else{
        console.log(' r = ' + r)
    }
}
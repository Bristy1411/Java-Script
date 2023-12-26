// var i = 0
// while(i < 10){
//     console.log(i + '. My name is Bristy')
//     i++
// }

var n = true
while(n){
    var r = Math.floor(Math.random() * 10 + 1)
    if(r===9){
        console.log('we got 9')
        n = false
    }
    else{
        console.log(' r = ' + r)
    }
}
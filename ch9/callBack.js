// 
function sample(a, b, cb){
    var s = a + b
    var d = a - b
    var r = cb(s, d)
    return r
}

function sum(a , b){
    return a + b
}

var result = sample(5, 8, sum)
console.log(result)

var result2 = (sample(5, 8, function(s, d){
    return s-d
}))
console.log(result2)

var result3 = (sample(5, 8, function(s, d){
    return s*d
}))
console.log(result3)


var obj = {
    x : 10,
    y : 20,
}

//in operator checks an property belongs to an objects or not
console.log(['x'] in obj )
console.log( ['p'] in obj)


for(var i in obj){ //assings all the propertise name on the object to i variable
    console.log(i) //propertise name
    console.log(i + ' : ' + obj[i]) //value of the property
}

//check a property belongs to an object or not
var check = 'p'
var isfound = false
for(var i in obj){
    if(i === check){
        console.log('found')
        isfound = true
        break
    }
}
if(!isfound){
        console.log('not found')
}
var str = 'bristy'
var str1 = "mahbuba"
console.log(str+'\n'+ str1)

var n = 10
console.log(n.toString())

var m = String(100)
console.log(m)


//*******String Comparison********

//ij use lexicographical system where the small z is greater than small a and capital Z
//the format is z>a and Z>A also z>Z
var a = 'abc'
var b = 'bcd'
console.log(a===b)

//*****string concatination********
var a = 'a bc d e'
var b = 'CDE'
var c = a + b
var c = a.concat(b)
var d =a.concat(' ', b)
console.log(c + '\n' + d)

//*********substring from a string**********
console.log(a.substring(2,6))

// ******check character in a index******
console.log(a.charAt(3))

//************string starts or ends with******
console.log(a.startsWith('a'))
console.log(a.endsWith('d'))

//******split a string into arrays********
console.log(a.split(' '))

//*******to uppper and lower case******
console.log(a.toUpperCase())
console.log(b.toLowerCase())

//********remove space from string*******
console.log(a.trim())

//*****string lenght*********
var lenght = 0
while(true){
    if(a.charAt(lenght)===''){
        break
    }else{
        lenght++
    }
}
console.log(lenght)

//or
console.log(a.length)
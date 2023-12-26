//******passing arguments in a function******
function sub(a, b){
    var result = a - b
    console.log(result)
}

sub(10, 4)
sub(50, 20)
sub(23, 14)

//******addArray elements*******
a1 = [1, 4, 7]
a2 = [2, 5 ,8]
a3 = [3, 6, 9, 10, 11]

function addArray(a){
    var s = 0
    for(var j = 0; j<a.length; j++){
            s+=a[j]
        }
    console.log(s)
}

addArray(a1)
addArray(a2)
addArray(a3)
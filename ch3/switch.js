var date = new Date()
var today = date.getDay()

switch(today){
    case 0:
        console.log('Today is sunday')
        break
    case 1:
        console.log('today is monday')
        break
    case 2:
        console.log('Today is tuseday')
        break
    case 3:
        console.log('today is wednessday')
        break
    case 4:
        console.log('today is thurseday')
        break
    case 5:
        console.log('today is friday')
        break
    case 6:
        console.log('today is saturday')
        break
    default:
        console.log('Not a valid value')
}
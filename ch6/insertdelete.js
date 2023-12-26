var arr = [1, 2, 3, 4, 5, 6]

//****array insert****
arr.push(7) //insert value in last index
arr.unshift(0) //insert value in array head
arr.splice(3, 0, 7, 8) //insert 7 and 8 value from 3rd index without removing any value


//*****array remove****
arr.pop() //remove a value frome last index
arr.shift() //left shift all value 
var arr2 = arr.splice(2, 3) //remove 3 value from index 2 =>splice also returns the removed values so we can store it in a new variable if needed
arr[3] = undefined //value of index 3 will be remove and undefined


//****update or replae using splice() methode *********/
arr.splice(3, 2, 56, 12) //replace 2 values from index 3 
console.log(arr)
console.log(arr2)
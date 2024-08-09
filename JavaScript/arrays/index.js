console.log("arrays");

//arrays are used to store values
let arr = [1,2,3,4,5];
console.log(arr[3]+arr[4])

//arrays have some defualt methods
console.log(arr.length)

console.log(arr.push(6,7,8))// array push is used to add values at the end of the array
console.log(arr)

console.log(arr.pop())//remove last element of array
console.log(arr)

console.log(arr.unshift(7,8,9))//unshift is used to add  values at the start of the array
console.log(arr)

console.log(arr.shift())//shift is used remove first element  of the array
console.log(arr)

//splice (starting index, deleteCount , elements to add in that index)
console.log(arr.splice(2,3, 99 ))
console.log(arr)

/* 
//let friends = ["john", "ross", "monika", "phoebe", "brad"]
//remove "brad", add "joey"
//remove john and add "chandler"
//bw rachel and monika , add "ursella"
*/

let friends = ["john", "ross","rachel", "monika", "phoebe", "brad"]
console.log(friends)

console.log(friends.splice(5,1,"joey"))
console.log(friends)

console.log(friends.splice(0,1,"chandler"))
console.log(friends)

console.log(friends.splice(3,0,"ursella"))
console.log(friends)

arr = [2,3,1,4,3,5]
console.log(arr)
console.log(arr.indexOf(3), arr.indexOf(3),arr[2])

console.log(arr.reverse())

arr=[1,5,4,11]
console.log(arr.sort())
console.log(arr.concat(1,2,3))

//forEach 
arr = [5,8,7,1,6]
// function display(x, y){ console.log(x*2, y)}
// arr.forEach(display)

arr.forEach(function (x, y)
{
    console.log(x*2, y)
})

//write a forEach for above array which prints square of number

arr.forEach(function(x){
    console.log(x*x)
})

let arr2 = arr.forEach(function(x){// forEach is not allowed to return
    console.log(x*x)
})
console.log(arr2)

let arr3 = arr.map(function(x){// map allowed to return
    return x*x
})
console.log(arr3)

//use map to iterate through array and return true/false if number is even or odd

let res = [5,8,2,1,4]
res = res.map(function (ele){
    return ele % 2 == 0;
})
console.log(res)

res = res.filter(function (ele){ //filter is used to filter
    return ele % 2 == 0;
})
console.log(res)

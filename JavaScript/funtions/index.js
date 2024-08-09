
function display()//function declaration
{
    console.log("hello im a function")//fn defenition/body
}
console.log("hi");
display();
//functions also have parameters
function add(a,b=10){
    console.log("the add is "+ (a+b));
}
add(5," hema");
add("bathu "," hema");
add(5,4);
add(5);
add(2,3);
//function can return values
//function is a also a datatype

function sum(a,b){
    return a+b;
}
let x = sum(1,4);
console.log(x);
console.log(sum)
var sum = function sum(a,b)//fn expression
{ 
    return a+b;
}
console.log(sum)
let y=sum(5,6);
console.log(y)

var sum = (a,b) => a+b;//arrow function
console.log(sum(5,5))


/* write a function that calulates and prints 
square and cube of a number, use arrow function
 and function expression
 */

//program:-
//arrow function
var square = (a) => a*a;
console.log(square(2))
//fn expression
var cube = function cube(a){
    return a*a*a;
}
console.log(cube(2))

/* 
write a function that return first and last letters of a
given name in uppercase, try arrow/function

input: "prasad", output :"PRASAD"
*/

function strName(str){
    let strName= str.length-1;
  return str[0]+str[6].toUpperCase();

}
let result = strName("hemadri")
console.log(result)

//callbacks
//call back is a function which is passed as a parameter to another function 

//callback mad fn
function mad(){  // mad treated as variable here 
   console.log("im mad")
}


function bad(a,b){ // highrer order bad fn
    console.log(b)
    console.log("im bad "+ a);
    b();
    
}
bad(5,mad)

//-------------------------------------------------
function addCart ()
{
    console.log("item added successfully")

}

function cart (a){
    a();
    console.log("proceed to checkout");

}

function checkout (b)
{
    b(addCart)
    console.log("do payment")
}
checkout(cart)

//------------------------------------------------
function kill()
{
    console.log("im kill")
}

function bill()
{
    console.log("bill")
}

function mix(a,b)
{
    a();
    b();
    console.log("pandey")
}
mix(kill,bill)
//--------------------------------------------

/*
closures means inner function remembers outer fuction
values even after outer function execution ended
*/

 

function x2()
{
    var count =0;
    function y()
    {
        count++;
        console.log(count)
    }
    return y;
} 
let z = x2();
console.log(z)
z();
z();
z();

function x3()
{
    var a=5;
    function y2()
    {
        a= a*2;
        console.log(a);
    }
    return y2;
}
let z1 = x3();
console.log(z1)
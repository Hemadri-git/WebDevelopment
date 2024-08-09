// control statements are used to control the flow of documents
//if
//switch

//simple if
let a = 3;
if (a > 0) {
  console.log("A is greater than zero");
}

//if-else
if (a >= 5) {
  console.log(" A is greater than or equal than to five");
} else {
  console.log("failed");
}

//if-else-ladder
//positive or negative
if (a > 0) {
  console.log("+ve");
} else if (a < 0) {
  console.log("-ve");
} else {
  console.log("zero");
}

//find min and max
a = 5;
let b = 20,
  c = 1;

let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

let min = a < b ? (a < c ? a : c) : b < c ? b : c;
console.log(min);

//use switch to print the days of week by number in console

let num = 5;
switch (num) {
  case 0:
    console.log("sunday");
    break;

  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saterday");
    break;

  default:
    console.log("invalid");
}



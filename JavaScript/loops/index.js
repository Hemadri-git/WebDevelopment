//loops are used to repeat the certain statement again and again until a particular condition false
//iteration repeation of loop

//1.while: while must have initialization, condition , updation and its iterates the loop until proven false

let i = 5;
while (i <= 10) {
  console.log(i);
  i++;
}

//2.  do while: it also does similar to while but checks condition at the end of the loop
do {
  console.log(i);
  i++;
} while (i <= 10);

//3.standard for : for(initilazition; condotion; updation)
for (let a = 0; a <= 10; a++) {
  console.log(a);
}

//"prasad-> "PrAsAd
let str = "prasad";
let str1 = "";
for (let i = 0; i < str.length; i++) {
  str1 += (i % 2 == 0 )? str[i].toUpperCase() : str[i].toLowerCase();
}
console.log(str1);


//for of
let arr=[5,3,5,6,7]
for(let k of arr){
    console.log(k)
}

//for in
for(let k in arr){
    console.log(k)
}

let str2 = ["Ajay Raj", "John Doe", " Raj Shaker", " Pooja Begam"]   //--> ["AR", "JD", "RS", "PB"]
w =  "Ajay Raj".split(" ").map(ele => ele[0])

  console.log(w)
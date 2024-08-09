console.log(document)
//DOM selection
const x1 = document.getElementsByTagName('p')
console.log(x1[1])
const x2 = document.getElementsByClassName('para')
console.log(x2[0])
const x3= document.getElementById('pa')
console.log(x3)

const x4 = document.querySelector('p')
console.log(x4)

const x5 = document.querySelectorAll("p")
console.log(x5)

//maniplation
function fun(){
    alert(x3.textContent)
    x3.textContent = "byeeeeeeeeeeeeeeeeeeeeeeee"
    // alert(x3.innerText)
    // x3.innerHTML = <b> buru </b>
    
}


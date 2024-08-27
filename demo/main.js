let username;

const submit = document.getElementById("mybutton");

submit.onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent =  `Hello ${username}`;

}
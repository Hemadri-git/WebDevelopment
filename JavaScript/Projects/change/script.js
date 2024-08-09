function change(){
    let random_value = Math.round(Math.random()*100000).toString(16)
    document.body.style.backgroundColor="#"+random_value
}

let colors = ["red", "violet", "indigo","blue", "green", "yellow", "orange"]
function change2()
{
    let random_number = Math.floor(Math.random()*9)
    document.body.style.backgroundColor = colors[random_number]
}
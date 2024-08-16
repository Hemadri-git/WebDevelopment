const data = [{
    "name":"raj",
    "status": "fail"
},
{
    "name": "shekhar",
    "status": "success"
},
{
    "name": "kumar",
    "status": "fail"
}]

const mainDiv = document.getElementById('main')

data.forEach(function (ele){

    const dataDiv = document.createElement('div');

    const nameEle = document.createElement('h2');
    nameEle.textContent = ele.name;

    const statusEle = document.createElement('p');
    statusEle.textContent = ele.status;

    dataDiv.append(nameEle, statusEle);
    mainDiv.appendChild(dataDiv)



})
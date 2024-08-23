const mainDiv = document.getElementById("productsList");
const fetchData = async () =>
{
    try
    {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData();
const displayData = (data) =>
{
    data.products.forEach((p) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('product')
        const proImage = document.createElement('img');
        proImage.src = p.thumbnail;
        proImage.alt = p.title;
        const proTitle = document.createElement('h2');
        proTitle.textContent= p.title
        const proPrice = document.createElement('p');
        proPrice.textContent= "Price: $"+p.price
        const addCartButton = document.createElement('button')
        addCartButton.textContent = "ADD CART"
        proDiv.append(proImage, proTitle, proPrice, addCartButton);
        mainDiv.appendChild(proDiv)
    })
}
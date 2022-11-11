
export const addContent = (products, categories) => {

  const content = document.getElementById('content')

  var child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }

  if (!products.result.length) {
    const missingProducts = document.createElement("h2")
    missingProducts.innerHTML = "No products"
    content.appendChild(missingProducts)
    return
  }

  const mapedProducts = products.result.map(e => document.createElement('div'))

  for (let i = 0; i < mapedProducts.length; i++) {
    const title = document.createElement("h2")
    title.innerHTML = products.result[i].name;
    const price = document.createElement("p")
    price.innerHTML = "price: " + products.result[i].price;
    const image = document.createElement("img")
    image.src = products.result[i].url_image;
    const discount = document.createElement("p")
    discount.innerHTML = "discount: " + products.result[i].discount;
    const category = document.createElement("p")
    category.innerHTML = "category: " + categories[products.result[i].category - 1].name;
    mapedProducts[i].appendChild(title)
    mapedProducts[i].appendChild(image)
    mapedProducts[i].appendChild(price)
    mapedProducts[i].appendChild(discount)
    mapedProducts[i].appendChild(category)
    mapedProducts[i].classList.add("col-md", "col", "mw-20")
    content.appendChild(mapedProducts[i])
  }
}
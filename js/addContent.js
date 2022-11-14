export const addContent = (products, categories) => {

  const content = document.getElementById('content')

  if (!products.result.length) { // No Products Case
    const missingProducts = document.createElement("h2")
    missingProducts.innerHTML = "No products"
    content.appendChild(missingProducts)
    return
  }

    products.result.forEach(e => { // Append content to html
    const item = document.createElement('div')
    const title = document.createElement("h2")
    title.innerHTML = e.name;
    const price = document.createElement("p")
    price.innerHTML = "price: " + e.price;
    const image = document.createElement("img")
    image.src = e.url_image;
    const discount = document.createElement("p")
    discount.innerHTML = "discount: " + e.discount;
    const category = document.createElement("p")
    category.innerHTML = "category: " + categories[e.category - 1].name;
    item.append(title, image, price, discount, category)
    item.classList.add("item")
    content.appendChild(item)
})
}
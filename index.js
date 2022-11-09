import { addContent } from './js/addContent.js';
import { fetchCategory, fetchProduct } from './js/fetchData.js'

const products = await fetchProduct()
const categories = await fetchCategory()

console.log(products);
console.log(categories);
addContent(products, categories)


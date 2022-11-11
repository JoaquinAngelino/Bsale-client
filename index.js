import { addContent } from './js/addContent.js';
import { fetchCategory, fetchProduct } from './js/fetchData.js'
import { pagination } from './js/pagination.js';
import { searchListener } from './js/searchListener.js';
import { setCount } from './js/setCount.js';


const products = await fetchProduct()
const categories = await fetchCategory()

addContent(products, categories)
setCount(products.count)
pagination(products.pages)

searchListener(categories)


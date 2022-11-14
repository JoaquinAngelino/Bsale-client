import { addContent } from './js/addContent.js';
import { category } from './js/category.js';
import { fetchCategory, fetchProduct } from './js/fetchData.js'
import { pagination } from './js/pagination.js';
import { searchListener } from './js/searchListener.js';
import { setCount } from './js/setCount.js';

const products = await fetchProduct()
const categories = await fetchCategory()

addContent(products, categories)

let newUrl = new URLSearchParams(window.location.search)
pagination(products.pages, newUrl.get("page"))
setCount(products.count, newUrl.get("name"))
category(categories)

searchListener()

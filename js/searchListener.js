import { addContent } from "./addContent.js";
import { fetchProduct } from "./fetchData.js";
import { pagination } from "./pagination.js";
import { setCount } from "./setCount.js";

export const searchListener = (categories) => {

  const search = document.getElementById("search")

  search.addEventListener("keypress", async event => {
    if (event.key !== "Enter") { return }
    event.preventDefault();

    const prod = await fetchProduct(event.target.value)
    addContent(prod, categories)
    pagination(prod.pages, 1)
    setCount(prod.count)
  });
}
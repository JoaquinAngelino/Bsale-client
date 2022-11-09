
export const fetchProduct = async (name, category,) => {
  console.log(window.location.search)
  let nameQuery = name ? "name=" + name + "&" : ""
  const res = await fetch("http://localhost:3001/product?" + nameQuery);
  const data = await res.json()
  return data

}
export const fetchCategory = async () => {
  const res = await fetch("http://localhost:3001/category")
  const data = await res.json()
  return data;
}
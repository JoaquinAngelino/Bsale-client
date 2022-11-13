
export const fetchProduct = async () => {
  let newUrl = new URLSearchParams(window.location.search)
  const res = await fetch("http://localhost:3001/product?" + newUrl.toString());
  const data = await res.json()
  return data
}

export const fetchCategory = async () => {
  const res = await fetch("http://localhost:3001/category")
  const data = await res.json()
  return data;
}
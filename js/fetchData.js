
export const fetchProduct = async () => {
  let newUrl = new URLSearchParams(window.location.search)
  const res = await fetch("https://bsalechallengeapi.herokuapp.com/product?" + newUrl.toString());
  const data = await res.json()
  return data
}

export const fetchCategory = async () => {
  const res = await fetch("https://bsalechallengeapi.herokuapp.com/category")
  const data = await res.json()
  return data;
}
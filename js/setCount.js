
export const setCount = (count) => {
  const elements = document.getElementById('counter')
  elements.innerHTML = count + " results"
}
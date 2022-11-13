
export const setCount = (count, name) => {
  const elements = document.getElementById('counter')
  elements.innerHTML = count + ' results '
  elements.innerHTML += name ? 'for "' + name + '"' : ''
}
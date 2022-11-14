export const pagination = (nPages, actual = 1) => {
  const pageContainer = document.getElementById("pagination")


  for (let i = 0; i < nPages; i++) {   // numeration + eventListeners
    const child = document.createElement('li')
    child.innerHTML = i + 1
    child.classList.add('pagination-item')
    if (i === actual - 1) {
      child.classList.add('actual')
    } else {
      child.addEventListener("click", () => {
        let newUrl = new URLSearchParams(window.location.search)
        newUrl.set("page", child.innerHTML)
        window.location.search = newUrl.toString()
      });
    }
    pageContainer.appendChild(child)
  }

}
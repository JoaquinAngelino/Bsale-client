export const category = (categories) => {
  const filterContainer = document.getElementById("filter-list")

  for (let element of categories) { // Append content to HTML + Listener of each
    const child = document.createElement('li')
    child.innerHTML = element.name
    child.classList.add("filter")
    let newUrl = new URLSearchParams(window.location.search)
    if (newUrl.get("category") === element.id + "") {
      child.classList.add("actual")
    }
    child.addEventListener("click", () => {
      let newUrl = new URLSearchParams(window.location.search)
      if (newUrl.get("category") === element.id + "") {
        newUrl.delete("category")
      } else {
        newUrl.set("category", element.id)
      }
      newUrl.set("page", "1")
      window.location.search = newUrl.toString()
    });
    filterContainer.appendChild(child)
  }
}
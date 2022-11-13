
export const searchListener = () => {

  const search = document.getElementById("search")

  search.addEventListener("keypress", event => {
    if (event.key !== "Enter") { return }
    event.preventDefault();
    let newUrl = new URLSearchParams(window.location.search)
    newUrl.set("name", event.target.value)
    newUrl.set("page", "1")
    newUrl.delete("category")
    window.location.search = newUrl.toString()
  });
}
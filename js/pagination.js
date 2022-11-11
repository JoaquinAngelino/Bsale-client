import { paginationListener } from "./paginationListener.js";

export const pagination = (nPages, actual = 1) => {
  const pageContainer = document.getElementById("pagination")

  var child = pageContainer.lastElementChild;
  while (child) {
    pageContainer.removeChild(child);
    child = pageContainer.lastElementChild;
  }

  for (let i = 0; i < nPages; i++) {
    const algo = document.createElement('li')
    algo.innerHTML = i + 1
    if (i === actual - 1) { algo.classList.add('actual') }
    paginationListener(algo)

    pageContainer.appendChild(algo)
  }

}
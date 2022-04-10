// creates form of all categories with input-style checkbox
// form can be used to hide&show selected categories

const getCategories = function () {
  let categories = document.querySelectorAll("option");
  for (let category of categories) {
    let divContainer = document.createElement("div");

    // 'wybierz kategorię' will not be displayed
    if (category.id > 0) {
      let filterInput = document.createElement("input");
      filterInput.classList.add("catCheckbox");
      filterInput.setAttribute("type", "checkbox");
      filterInput.setAttribute("id", `${category.getAttribute("id")}`);
      filterInput.checked = true;
      filterInput.setAttribute("name", `${category.innerText}`);

      let filterLabel = document.createElement("label");
      filterLabel.setAttribute("for", `${category.getAttribute("id")}`);
      filterLabel.innerText = `${category.innerText}`;
      filterLabel.style.padding = "6px 12px";

      divContainer.appendChild(filterInput);
      divContainer.appendChild(filterLabel);
      document.querySelector(".filterMenu form").appendChild(divContainer);
    }
  }
};

export default getCategories;

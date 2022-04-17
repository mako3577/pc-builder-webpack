import "./styles/main.scss";
import "./styles/general.scss";
import countPrice from "./countPrice";
import categoryFilter from "./assets/categoryFilter.svg";
import getCategories from "./getCategories";
import getSelectedCategories from "./getSelectedCategories";

let nameInput = document.querySelector(".name-input");
let priceInput = document.querySelector(".price-input");
let infoInput = document.querySelector(".info-input");
let selectField = document.querySelector(".select-field");
const table = document.querySelector(".table tbody");
const addBtn = document.querySelector(".add-item-btn");
const delBtns = document.querySelectorAll(".delete-button");
const editBtn = document.querySelector(".edit-button");
// 4 main inputs from top side of the app
const mainInputs = document.querySelectorAll(".input-field");
let id = localStorage.getItem("id");
let priceSortStatus;

// generated automatically when 'categoriesSettingsBtn' clicked
const categoriesList = document.querySelector(".categories-list");
const categorySettingsBtn = document.querySelector(".category-settings-btn");
const categorySettingsCloseBtn = document.querySelector(".close-clas-edit-btn");
const addCatBtn = document.querySelector(".add-cat-btn");
const categoryFilterButton = document.querySelector(".category-filter-button");
const getSelectedCategoriesBtn = document.querySelector(".getSelectedCategoriesBtn");

// those are basic select options. Created only if user hasn't his own options in localStorage.
// if you want to set other basic categories, you can do that
// it will work fine with any number of categories inside
let basicCategories = ["Podzespoły komputera", "Urządzenia peryferyjne", "oprogramowanie", "inne"];

let catId = "0";

if (typeof localStorage.getItem("catId") != "undefined" && localStorage.getItem("catId") != null) {
  catId = localStorage.getItem("catId");
}

// read categories saved in local storage
// and add them as a options to 'select-category'
const categoriesInit = function () {
  console.log("categories init");
  for (let category of basicCategories) {
    catId++;
    const newCategory = document.createElement("option");
    newCategory.setAttribute("value", `${category}`);
    newCategory.innerText = `${category}`;

    newCategory.setAttribute("id", catId);

    localStorage.setItem(`cat${catId}`, newCategory.innerText);
    selectField.appendChild(newCategory);
  }
  localStorage.setItem("catId", catId);
};

const addNewCat = function () {
  let newCatInput = document.querySelector(".new-cat-input");

  let newCatText = newCatInput.value;
  if (newCatText.length > 1) {
    let newCatLi = document.createElement("li");
    let newP = document.createElement("p");
    newP.innerText = newCatText;
    const newButton = document.createElement("button");
    newButton.classList.add("delete-category");
    newButton.classList.add("button");
    newButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    newCatLi.classList.add("space-btw");
    newCatLi.classList.add("flex");

    let newCat = document.createElement("option");
    // set attribute of new category
    // to make saving it in localStorage possible
    catId++;
    newCat.setAttribute("id", catId);
    newCat.value = newCatText;
    newCat.innerText = newCatText;

    newCatLi.appendChild(newP);
    newCatLi.appendChild(newButton);
    categoriesList.appendChild(newCatLi);

    selectField.appendChild(newCat);

    newButton.addEventListener("click", deleteCategory);
    newCatInput.value = "";

    localStorage.setItem(`cat${catId}`, newCatText);
    localStorage.setItem("catId", catId);

    // add new cat to filter form
    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.checked = true;
    newInput.id = catId;
    newInput.name = newCatText;

    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", catId);
    newLabel.style.padding = "6px 12px";
    newLabel.innerText = newCatText;

    const newFilter = document.createElement("div");

    document.querySelector("form").appendChild(newFilter);
    newFilter.appendChild(newInput);
    newFilter.appendChild(newLabel);
  } else {
    newCatInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
    newCatInput.addEventListener("click", function () {
      newCatInput.style.border = "black solid 1px";
    });
  }
};

// read values of items stored in local storage
// and create new table with all those items
const initTable = function () {
  for (let i = 1; i <= id; i++) {
    if (typeof localStorage[`${i}`] != "undefined") {
      let newItemParameters = localStorage.getItem(`${i}`).split(",");
      let newTr = document.createElement("tr");
      newTr.setAttribute("id", `${i}`);

      let newItemName = document.createElement("td");
      newItemName.innerText = newItemParameters[0];
      newItemName.classList.add("name");

      let newItemDescription = document.createElement("td");
      newItemDescription.innerText = newItemParameters[1];
      newItemDescription.classList.add("description");

      let newItemPrice = document.createElement("td");
      newItemPrice.innerText = newItemParameters[2];
      newItemPrice.classList.add("price");

      let newItemCategory = document.createElement("td");
      newItemCategory.innerText = newItemParameters[3];
      newItemCategory.classList.add("category");

      let newButtonTd = document.createElement("td");
      newButtonTd.classList.add("buttons");

      let newButton = document.createElement("button");
      newButton.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';

      newButton.classList.add("delete-button");
      newButton.classList.add("button");

      // append children
      table.appendChild(newTr);

      newTr.appendChild(newItemName);
      newTr.appendChild(newItemDescription);
      newTr.appendChild(newItemPrice);
      newTr.appendChild(newItemCategory);
      newTr.appendChild(newButtonTd);

      newButtonTd.appendChild(newButton);

      // listener to the button
      newButton.addEventListener("click", deleteItem);
    }
  }
  countPrice();
};

const addItem = function () {
  // get values from input fields
  let name = nameInput.value;
  let price = priceInput.value;
  let info = infoInput.value;
  let category = selectField.value;

  // add color border to invalid value in inputs
  if (name == "") {
    nameInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }
  if (info == "") {
    infoInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }
  if (priceInput.value.length == 0 || priceInput.value < 0) {
    priceInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }
  if (selectField.value == "noAnswer") {
    selectField.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }

  // check if input fields were not empty
  if (
    name != "" &&
    price != "" &&
    info != "" &&
    category != "noAnswer" &&
    price >= 0 &&
    price < 9999999
  ) {
    // increase id to align higher than elements before
    id++;
    // create new tr element which will contain
    // all the inputs as a children
    let newItem = document.createElement("tr");
    newItem.setAttribute("id", `${id}`);
    table.appendChild(newItem);

    let newName = document.createElement("td");
    newName.innerText = name;
    newItem.appendChild(newName);
    newName.classList.add("name");

    let newInfo = document.createElement("td");
    newInfo.innerText = info;
    newItem.appendChild(newInfo);
    newInfo.classList.add("description");

    let newPrice = document.createElement("td");
    newPrice.innerText = price;
    newItem.appendChild(newPrice);
    newPrice.classList.add("price");

    let newCategory = document.createElement("td");
    newCategory.innerText = category;
    newCategory.classList.add("category");
    newItem.appendChild(newCategory);

    // also create buttons to allow deleting
    // and editing new items
    const newBtnsDiv = document.createElement("td");
    newBtnsDiv.classList.add("buttons");

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete-button");
    delBtn.classList.add("button");
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    newBtnsDiv.appendChild(delBtn);

    // add listener to new button
    delBtn.addEventListener("click", deleteItem);

    newItem.appendChild(newBtnsDiv);
    // reset inputs after adding new item
    nameInput.value = "";
    priceInput.value = "";
    infoInput.value = "";

    // selectField.value = firstOption;   - not working

    checkIfEmpty();
    localStorage.setItem(`${id}`, [name, info, price, category]);
    localStorage.setItem("id", `${id}`);

    countPrice();
  }
};

//
// function to edit table items
// to call it, double click table item
const editFunction = function (e) {
  editCancel();
  if (e.target.matches("td")) {
    // e.target is targeted column
    e.target.style.position = "relative";
    // Create input element
    const editInput = document.createElement("input");
    // Style input element
    editInput.style.position = "absolute";
    editInput.style.width = "80%";
    editInput.style.height = "100%";
    editInput.style.left = "0";
    editInput.style.top = "0";
    editInput.value = e.target.innerText;
    editInput.classList.add("activeEdit");

    // do not run edit function for buttons!
    if (!e.target.matches(".buttons")) {
      // for price column only numbers can be provided
      if (e.target.matches(".price")) {
        editInput.type = "number";
      }
      // create button to confirm changes
      editBtn.style.display = "block";

      editBtn.classList.add("activeEdit");
      // document.querySelector(".fa-square-check").style.height = "100%";
      // append both button and input as a children to target column
      e.target.appendChild(editInput);
      e.target.appendChild(editBtn);

      const targetedEl = e.target;
      let trToEdit = targetedEl.closest("tr");
      const editConfirm = function () {
        e.target.closest("td").innerText = editInput.value;
        editInput.remove();
        editBtn.remove();

        // change item in local Storage
        let trToEditId = e.target.closest("tr").id;
        let name = trToEdit.querySelector(".name").innerText;
        let description = trToEdit.querySelector(".description").innerText;
        let price = trToEdit.querySelector(".price").innerText;
        let category = trToEdit.querySelector(".category").innerText;
        let editedItem = name + "," + description + "," + price + "," + category;

        console.log("old", localStorage.getItem(trToEditId));
        localStorage.setItem(trToEditId, editedItem);
        console.log("new", localStorage.getItem(trToEditId));

        countPrice();
      };

      editBtn.addEventListener("click", editConfirm);
      e.target.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          editConfirm();
        }
      });
    }
  }
};

const editCancel = function () {
  // remove old input fields and buttons
  const oldInput = document.querySelectorAll(".activeEdit");
  for (let item of oldInput) {
    item.remove();
  }
};

const deleteItem = function (e) {
  // gParent = e.target.parentElement.parentElement; when clicked right in the icon inside the button
  // it was deleting button td instead of all the record

  const gParent = e.target.closest("tr");
  console.log(gParent);

  let itemId = gParent.getAttribute("id");

  localStorage.removeItem(`${itemId}`);

  gParent.remove();
  checkIfEmpty();

  countPrice();
};

const checkIfEmpty = function () {
  let itemsInCol = table.querySelectorAll("tr");
  if (itemsInCol.length <= 1) {
    document.querySelector(".empty-list-info").classList.add("visible");
    document.querySelector(".price-info").classList.remove("visible");
  } else {
    document.querySelector(".empty-list-info").classList.remove("visible");
    document.querySelector(".price-info").classList.add("visible");
  }
};

const createCategoriesList = function () {
  // clear old list
  let categories = document.querySelectorAll(".categories-list li");
  let categoriesAll = document.querySelectorAll(".select-field option");
  for (let category of categories) {
    category.remove();
  }
  for (let category of categoriesAll) {
    console.log(category.innerText);
    if (category.value != "noAnswer") {
      const newCategory = document.createElement("li");
      newCategory.style.display = "flex";
      newCategory.classList.add("space-btw");

      const newCategoryText = document.createElement("p");
      newCategoryText.innerText = category.innerText;

      const newCategoryButton = document.createElement("button");
      newCategoryButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      newCategoryButton.classList.add("delete-category");
      newCategoryButton.classList.add("button");
      newCategoryButton.addEventListener("click", deleteCategory);

      newCategory.appendChild(newCategoryText);
      newCategory.appendChild(newCategoryButton);
      categoriesList.appendChild(newCategory);
    }
  }
};

const deleteCategory = function (e) {
  let liToDel = e.target.closest("li");
  const textInside = e.target.closest("button").previousSibling.innerText;
  const optionToDel = document.querySelector(`[value ='${textInside}'`);

  let id = optionToDel.getAttribute("id");

  const allExistingCats = document.querySelectorAll(".category");

  const checker = function () {
    for (let category of allExistingCats) {
      if (category.innerText == textInside) {
        return true;
      }
    }
  };

  if (checker()) {
    // if there are elements with category
    // which is selected to delete,
    // dont delete this category
    // just show warning it's impossible
    liToDel.style.border = "red solid 2px";
    liToDel.style.position = "relative";

    let warning = document.createElement("p");
    warning.innerText = "Nie można usunąć, ponieważ istnieją elementy o tej kategorii!";
    warning.style.color = "red";
    warning.style.position = "absolute";
    warning.style.top = "0";
    warning.style.right = "-10px";
    warning.style.transform = "translateX(100%)";
    warning.style.background = "white";
    warning.style.padding = "5px 10px";

    warning.style.fontSize = "16px";
    liToDel.appendChild(warning);

    // delete warning after certain time
    setTimeout(function () {
      warning.remove();
      liToDel.style.border = "none";
    }, 2500);
    // If there is no items with such category, delete category.
  } else {
    if (textInside == "inne" && document.querySelectorAll(`[value ='${textInside}'`).length == 1) {
      console.log("return");
    } else {
      // delete from options list
      optionToDel.remove();

      // delete category from localStorage
      localStorage.removeItem(`cat${id}`);
      liToDel.remove();

      // delete item from cat filter settings
      for (let el of document.querySelectorAll("form label")) {
        if (el.innerText == textInside) {
          el.closest("div").remove();
        }
      }
    }
  }
};

// this function is creating options to 'category' select El
const createOptions = function () {
  if (typeof catId != "undefined" && catId > 1) {
    for (let i = 0; i <= catId; i++) {
      if (typeof localStorage[`cat${i}`] != "undefined") {
        console.log("i", i);
        let newCat = document.createElement("option");

        newCat.setAttribute("id", i);
        newCat.value = localStorage.getItem(`cat${i}`);
        newCat.innerText = localStorage.getItem(`cat${i}`);

        selectField.appendChild(newCat);
      }
    }
  } else {
    categoriesInit();
  }
};

// apply correct class to item
// class depends on fact,
// if it was selected in filter or not
const filterCategories = function () {
  let selectedArr = getSelectedCategories();
  const categories = document.querySelectorAll(".category");
  for (let category of categories) {
    if (selectedArr.includes(category.innerText)) {
      category.closest("tr").classList.remove("inactive");
    } else {
      category.closest("tr").classList.add("inactive");
    }
  }
  countPrice();
};

// delete all filters and show all the items in table
const deleteFilters = function () {
  let items = document.querySelectorAll("tr");
  for (let item of items) {
    item.classList.remove("inactive");
  }
  countPrice();
};

// show or hide filter options
const categoriesFilterMenu = function () {
  document.querySelector(".filterMenu").classList.toggle("active");
};

// show category settings window
const expandCategoriesSettings = function () {
  createCategoriesList();
  document.querySelector(".category-settings-div").classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".category-settings-div")) {
      document.querySelector(".category-settings-div").classList.toggle("active");
    }
  });
};

// close category settings window
const closeCatEdit = function () {
  document.querySelector(".category-settings-div").classList.remove("active");
};

// sort table rows increasing
// if it's already sorted increasing, sort decreasing
const priceSort = function () {
  let priceVal, nextPriceVal;
  const priceIcon = document.querySelector(".price-icon");

  // check current sorting status
  // if its other than 'increasing'
  // sort rows from small to big
  if (priceSortStatus != "increasing") {
    priceIcon.style.display = "flex";
    if (priceIcon.matches(".sortToLowest")) {
      priceIcon.classList.remove("sortToLowest");
    }

    for (let i = 1; i < document.querySelector(".table").rows.length - 1; i++) {
      priceVal = parseInt(document.querySelector(".table").rows[i].children[2].innerText);
      nextPriceVal = parseInt(document.querySelector(".table").rows[i + 1].children[2].innerText);

      // after iterating over prices in rows, check if they're
      // already positioned well
      // if not, change their positions in relation 1 to 1
      if (priceVal < nextPriceVal) {
        let bigger = document.querySelector(".table").rows[i + 1];
        let smaller = document.querySelector(".table").rows[i];

        let parentDiv = smaller.parentNode;

        parentDiv.insertBefore(bigger, smaller);
        i = 0;
      }
    }
    // change sorting status to enable sorting
    // from highest to smallest
    priceSortStatus = "increasing";
  } else {
    priceIcon.style.display = "flex";
    priceIcon.classList.add("sortToLowest");

    for (let i = 1; i < document.querySelector(".table").rows.length - 1; i++) {
      priceVal = parseInt(document.querySelector(".table").rows[i].children[2].innerText);
      nextPriceVal = parseInt(document.querySelector(".table").rows[i + 1].children[2].innerText);

      // after iterating over prices in rows, check if they're
      // already positioned well
      // if not, change their positions in relation 1 to 1
      if (priceVal > nextPriceVal) {
        let smaller = document.querySelector(".table").rows[i + 1];
        let bigger = document.querySelector(".table").rows[i];

        // define parent
        let parentDiv = smaller.parentNode;
        // change positions of rows
        parentDiv.insertBefore(smaller, bigger);

        // set i to to repeat the loop
        // this loop will be repeated to moment,
        // when all the prices will be sorted
        i = 0;
      }
    }
    // change status to make growing sorting possible
    priceSortStatus = "decreasing";
  }
};

///////////////////////
// Event listeners
// ////////////////////
//
addBtn.addEventListener("click", addItem);
table.addEventListener("dblclick", editFunction);
categorySettingsBtn.addEventListener("click", expandCategoriesSettings);
addCatBtn.addEventListener("click", addNewCat);
categorySettingsCloseBtn.addEventListener("click", closeCatEdit);
getSelectedCategoriesBtn.addEventListener("click", filterCategories);
document.querySelector(".resetSelectedCategoriesBtn").addEventListener("click", deleteFilters);
categoryFilterButton.addEventListener("click", categoriesFilterMenu);

for (let delBtn of delBtns) {
  delBtn.addEventListener("click", deleteItem);
}

// this listener construction allow user to cancel
// editing column just by clicking somewhere else
document.addEventListener("click", function (e) {
  if (e.target.matches(".activeEdit")) {
    return;
  } else editCancel();
});

// red border around input fields (wchich appears when invalid data)
// will be removed after click on the input
for (let input of mainInputs) {
  input.addEventListener("click", function (e) {
    for (input of mainInputs) {
      e.target.style.border = "";
    }
  });
}

// starting functions
initTable();
checkIfEmpty();
countPrice();
createOptions();
getCategories();

document.querySelector(".th-cena").addEventListener("click", priceSort);

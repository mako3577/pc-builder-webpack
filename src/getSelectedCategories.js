// returns an array of selected categories ID's
const getSelectedCategories = function () {
  let inFilterCategories = document.querySelectorAll(".catCheckbox");
  let idArr = [];
  for (let checkedCategory of inFilterCategories) {
    if (checkedCategory.checked) {
      // returns text inside label connected with input
      idArr.push(checkedCategory.nextSibling.innerText);
    }
  }
  console.log(idArr);
  return idArr;
};

export default getSelectedCategories;

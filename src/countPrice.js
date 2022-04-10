const countPrice = function () {
  let priceCols = document.querySelectorAll(".price");
  let summaryCost = 0;
  for (let price of priceCols) {
    if (!price.closest("tr").classList.contains("inactive")) {
      console.log("inactive");
      summaryCost += parseInt(price.innerText);
    }
  }
  document.querySelector(".price-info").textContent = `Łączna cena to ${summaryCost} PLN.`;
};

export default countPrice;

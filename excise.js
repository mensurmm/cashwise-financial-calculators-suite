document.getElementById("product").addEventListener("change", function () {
  const product = this.value;
  const customRateContainer = document.getElementById("custom-rate-container");

  // Show custom rate input only if "custom" is selected
  if (product === "custom") {
    customRateContainer.style.display = "block";
  } else {
    customRateContainer.style.display = "none";
  }
});

document.getElementById("excise-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const product = document.getElementById("product").value;
  let rate;

  // Default rates based on product type
  switch (product) {
    case "beer":
      rate = 40;
      break;
    case "tobacco":
      rate = 30;
      break;
    case "evehicle":
      rate = 0;
      break;
    case "hvehicle":
      rate = 5;
      break;
    case "sugar":
      rate = 10;
      break;
    case "plastic":
      rate = 20;
      break;
    case "beuty":
      rate = 100;
      break;
    case "wine":
      rate = 30;
      break;
    case "hair":
      rate = 30;
      break;
    case "drinks":
      rate = 25;
      break;
    case "gin":
      rate = 100;
      break;
    case "custom":
      rate = parseFloat(document.getElementById("rate").value);
      if (isNaN(rate)) {
        document.getElementById("excise-result").innerHTML =
          "<p>Please enter a valid custom rate.</p>";
        return;
      }
      break;
  }

  if (isNaN(amount)) {
    document.getElementById("excise-result").innerHTML =
      "<p>Please enter a valid amount.</p>";
    return;
  }

  const excise = (amount * rate) / 100;
  const total = amount + excise;

  document.getElementById("excise-result").innerHTML = `
    <p><strong>Excise Tax (${rate}%):</strong> ${excise.toFixed(2)}</p>
    <p><strong>Total Amount (incl. Excise):</strong> ${total.toFixed(2)}</p>
  `;
});

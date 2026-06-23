document.getElementById("pit-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const income = parseFloat(document.getElementById("income").value);
  if (isNaN(income) || income < 0) {
    document.getElementById("pit-result").innerHTML = "<p>Please enter a valid income.</p>";
    return;
  }

  let tax = 0;

  if (income <= 600) {
    tax = 0;
  } else if (income <= 1650) {
    tax = (income - 600) * 0.10;
  } else if (income <= 3200) {
    tax = (income - 1650) * 0.15 + 105;
  } else if (income <= 5250) {
    tax = (income - 3200) * 0.20 + 367.5;
  } else if (income <= 7800) {
    tax = (income - 5250) * 0.25 + 867.5;
  } else if (income <= 10900) {
    tax = (income - 7800) * 0.30 + 1505;
  } else {
    tax = (income - 10900) * 0.35 + 2405;
  }

  const netIncome = income - tax;

  document.getElementById("pit-result").innerHTML = `
    <p><strong>Gross Income:</strong> ${income.toFixed(2)} ETB</p>
    <p><strong>Tax Payable:</strong> ${tax.toFixed(2)} ETB</p>
    <p><strong>Net Income (after tax):</strong> ${netIncome.toFixed(2)} ETB</p>
  `;
});

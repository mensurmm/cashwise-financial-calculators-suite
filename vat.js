document.getElementById("vat-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("rate").value);

  // Default to 15% if user leaves rate empty
  if (isNaN(rate)) {
    rate = 15;
  }

  if (isNaN(amount)) {
    document.getElementById("vat-result").innerHTML = "<p>Please enter a valid amount.</p>";
    return;
  }

  const vat = (amount * rate) / 100;
  const total = amount + vat;

  document.getElementById("vat-result").innerHTML = `
    <p><strong>VAT (${rate}%):</strong> ${vat.toFixed(2)}</p>
    <p><strong>Total Amount (incl. VAT):</strong> ${total.toFixed(2)}</p>
  `;
});

 const growthRates = {
        nvidia: 1.0, // 100% yearly growth
        apple: 0.05, // 5% yearly growth
        tesla: 0.2, // 20% yearly growth
      };

      document
        .getElementById("investment-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const company = document.getElementById("company").value;
          const amount = parseFloat(document.getElementById("amount").value);
          const years = parseInt(document.getElementById("years").value);
          const growth = growthRates[company];

          const finalValue = amount * Math.pow(1 + growth, years);
          const profit = finalValue - amount;

          document.getElementById("investment-result").innerHTML = `
        <p><strong>Company:</strong> ${company.toUpperCase()}</p>
        <p><strong>Initial Investment:</strong> $${amount.toFixed(2)}</p>
        <p><strong>Final Value:</strong> $${finalValue.toFixed(2)}</p>
        <p><strong>Total Profit:</strong> $${profit.toFixed(2)}</p>
      `;
        });
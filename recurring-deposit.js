document.getElementById("rd-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const monthly = parseFloat(document.getElementById("monthly").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(monthly) || isNaN(rate) || isNaN(time)) {
    document.getElementById("rd-result").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  const months = time * 12;
  let maturity = 0;

  // RD formula: Each installment earns interest for remaining months
  for (let i = 1; i <= months; i++) {
    const remainingMonths = months - i + 1;
    const installmentValue = monthly * Math.pow(1 + rate / 12, remainingMonths);
    maturity += installmentValue;
  }

  const totalDeposits = monthly * months;
  const interestEarned = maturity - totalDeposits;

  document.getElementById("rd-result").innerHTML = `
    <p><strong>Total Deposits:</strong> ${totalDeposits.toFixed(2)}</p>
    <p><strong>Interest Earned:</strong> ${interestEarned.toFixed(2)}</p>
    <p><strong>Maturity Amount:</strong> ${maturity.toFixed(2)}</p>
  `;

  // Build chart data
  const monthsArr = [];
  const amounts = [];
  let cumulative = 0;
  for (let i = 1; i <= months; i++) {
    cumulative += monthly;
    const growth = cumulative * Math.pow(1 + rate / 12, months - i);
    monthsArr.push("Month " + i);
    amounts.push(growth);
  }

  // Show chart container
  document.querySelector(".charts").style.display = "block";

  // Draw chart
  const ctx = document.getElementById("rd-chart").getContext("2d");
  if (window.rdChart) {
    window.rdChart.destroy();
  }
  window.rdChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: monthsArr,
      datasets: [
        {
          label: "RD Growth",
          data: amounts,
          borderColor: "#f39c12",
          backgroundColor: "rgba(243,156,18,0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

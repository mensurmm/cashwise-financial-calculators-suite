document.getElementById("fd-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseFloat(document.getElementById("time").value);
  const frequency = parseInt(document.getElementById("frequency").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
    document.getElementById("fd-result").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  // FD formula: A = P (1 + r/n)^(n*t)
  const maturityAmount =
    principal * Math.pow(1 + rate / frequency, frequency * time);
  const interestEarned = maturityAmount - principal;
  document.querySelector(".charts").style.display = "block";
  document.getElementById("fd-result").innerHTML = `
    <p><strong>Interest Earned:</strong> ${interestEarned.toFixed(2)}</p>
    <p><strong>Maturity Amount:</strong> ${maturityAmount.toFixed(2)}</p>
  `;

  // Build chart data
  const years = [];
  const amounts = [];
  for (let i = 1; i <= time; i++) {
    const yearlyAmount =
      principal * Math.pow(1 + rate / frequency, frequency * i);
    years.push("Year " + i);
    amounts.push(yearlyAmount);
  }

  // Draw chart
  const ctx = document.getElementById("fd-chart").getContext("2d");
  if (window.fdChart) {
    window.fdChart.destroy(); // destroy old chart before creating new
  }
  window.fdChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "FD Growth",
          data: amounts,
          borderColor: "#b98729ff",
          backgroundColor: "rgba(196, 196, 190, 0.2)",
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

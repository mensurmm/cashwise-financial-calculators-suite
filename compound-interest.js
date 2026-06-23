document.getElementById("ci-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseFloat(document.getElementById("time").value);
  const frequency = parseInt(document.getElementById("frequency").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
    document.getElementById("ci-result").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  // Compound Interest Formula: A = P (1 + r/n)^(n*t)
  const amount = principal * Math.pow(1 + rate / frequency, frequency * time);
  const interest = amount - principal;

  document.getElementById("ci-result").innerHTML = `
    <p><strong>Compound Interest:</strong> ${interest.toFixed(2)}</p>
    <p><strong>Total Amount:</strong> ${amount.toFixed(2)}</p>
  `;
  document.querySelector(".charts").style.display = "block";
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
  const ctx = document.getElementById("ci-chart").getContext("2d");
  if (window.ciChart) {
    window.ciChart.destroy(); // destroy old chart before creating new
  }
  window.ciChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Total Amount",
          data: amounts,
          borderColor: "#ae7827ff",
          backgroundColor: "rgba(174, 138, 39, 0.2)",
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

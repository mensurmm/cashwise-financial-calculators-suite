document.getElementById("si-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("si-result").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  document.getElementById("si-result").innerHTML = `
    <p><strong>Simple Interest:</strong> ${interest.toFixed(2)}</p>
    <p><strong>Total Amount:</strong> ${total.toFixed(2)}</p>
  `;

  // Build chart data
  const years = [];
  const amounts = [];
  for (let i = 1; i <= time; i++) {
    const yearlyInterest = (principal * rate * i) / 100;
    const yearlyTotal = principal + yearlyInterest;
    years.push("Year " + i);
    amounts.push(yearlyTotal);
  }
  document.querySelector(".charts").style.display = "block";
  // Draw chart
  const ctx = document.getElementById("si-chart").getContext("2d");
  if (window.siChart) {
    window.siChart.destroy(); // destroy old chart before creating new
  }
  window.siChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Total Amount",
          data: amounts,
          borderColor: "#e67e22",
          backgroundColor: "rgba(230,126,34,0.2)",
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

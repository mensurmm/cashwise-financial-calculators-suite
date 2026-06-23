async function loadNews() {
  const apiKey = "8c5746dd083b42ad9ed1923ddb49ccb6"; 
  const url = `https://newsapi.org/v2/everything?q=banking+finance+stock+market&sortBy=publishedAt&language=en&pageSize=5&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const articles = data.articles;
    const newsList = document.getElementById("news-list");
    newsList.innerHTML = "";

    articles.forEach(article => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${article.url}" target="_blank">${article.title}</a>
        <p>${article.description ? article.description : "No summary available."}</p>
      `;
      newsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("news-list").innerHTML = "<li>Unable to load news at the moment.</li>";
  }
}

document.addEventListener("DOMContentLoaded", loadNews);

# CashWise

## Beautiful, accessible finance tools for everyday money decisions

**CashWise** is a lightweight, static web app built with plain HTML, CSS, and JavaScript. It brings together a suite of interactive calculators for personal finance, savings, taxes, and investment planning — all designed for fast access, easy navigation, and real-time results.

---

## Why CashWise?

- **Instant financial clarity**: get fast answers for interest, deposits, VAT, excise tax, and income tax.
- **No install required**: open the files in any modern browser or host as a static site.
- **Mobile-friendly interface**: responsive layout and clean navigation for desktop and mobile.
- **Deployment ready**: includes a GitHub Pages workflow for automated publishing.

---

## What’s included

### Main navigation
- `index.html` — home page with slideshow highlights and quick access to every calculator.
- `about.html` — project story, mission, and feature summary.

### Banking and savings tools
- `simple-interest.html` / `simple-interest.js` — calculate simple interest, principal, rate, and time.
- `compound-interest.html` / `compound-interest.js` — estimate compound growth with configurable frequency.
- `fd.html` / `fixed-deposit.js` — fixed deposit helper for secure savings projections.
- `rd.html` / `recurring-deposit.js` — recurring deposit growth calculator for regular savings.

### Tax and compliance tools
- `vat.html` / `vat.js` — VAT calculator for taxable sales and inclusive/exclusive pricing.
- `excise.html` / `excise.js` — excise tax calculator for custom tax scenarios.
- `Personal-income.html` / `personal-income.js` — personal income tax planning.

### Investment planning
- `investement.html` / `investement.js` — equity growth and investment scenario modeling.

### Shared assets
- `style.css` — global styling for the site.
- `slideshow.js` — homepage slideshow behavior.
- `news.js` — dynamic news section on the homepage.

---

## Features

- Full static website with single-file HTML pages
- Clean, modern navigation and dropdown menus
- Realtime calculation results without page refresh
- GitHub Pages ready via `.github/workflows/pages.yml`
- Simple deployment model with no dependencies
- Responsive layout for desktop and mobile viewing

---

## How to use

### Option 1: Open locally
1. Open `index.html` in your browser.
2. Click any calculator from the navigation menu.
3. Enter values and view results instantly.

### Option 2: Run a local server (recommended)

```bash
# Python 3
python -m http.server 8000

# or using npm
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## Deployment

### Deploy to GitHub
1. Create a GitHub repository for this project.
2. Run the commands below from the project folder:

```bash
git init
git add .
git commit -m "Add CashWise finance calculator suite"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Deploy to GitHub Pages
This repository already includes a workflow at `.github/workflows/pages.yml` that deploys the repository root to the `gh-pages` branch on every push to `main`.

1. Push your code to GitHub.
2. Enable GitHub Pages in repository settings.
3. Select `gh-pages` as the publish branch if needed.

---

## Customization ideas

- Add a **dark theme** toggle for night-mode browsing.
- Expand with a **loan calculator** or **EMI planner**.
- Add **chart visualizations** for deposit growth and investment returns.
- Improve accessibility with better keyboard navigation and form labels.

---

## Contributing

Contributions are welcome. Whether you want to add new calculators, improve the design, or polish the documentation, the project is ready for collaboration.

- Create an issue for bug reports or ideas.
- Submit a pull request with improvements.
- Keep the site static and dependency-free for easiest deployment.



## Project summary

CashWise is a compact financial toolkit built for learners, entrepreneurs, and anyone who needs instant, accurate money calculations. It makes everyday financial planning easy with a friendly interface and a static, lightweight architecture.

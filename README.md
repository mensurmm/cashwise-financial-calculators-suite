# CashWise —  cashwise-financial-calculators-suite - Includes interest, FD/RD, VAT/excise calculators

Interactive collection of small HTML/JS calculators for personal finance: simple & compound interest, fixed/recurring deposits, VAT/excise calculations, and more.

Live demo: Deploy this repository to GitHub Pages to host a live demo.

Features
- Friendly single-file demos using plain HTML, CSS and vanilla JS
- No build step required — static site ready for GitHub Pages
- Mobile-friendly styles and a small slideshow script

Files of interest
- [index.html](index.html) — Home and navigation
- [simple-interest.html](simple-interest.html) / simple-interest.js — Simple interest calculator
- [compound-interest.html](compound-interest.html) / compound-interest.js — Compound interest calculator
- [fixed-deposit.js](fixed-deposit.js) and [recurring-deposit.js](recurring-deposit.js) — FD and RD helpers
- [personal-income.js](personal-income.js) and [Personal-income.html](Personal-income.html) — Income tools
- [style.css](style.css) — Styles used across pages

Table of contents
1. Usage
2. Run locally
3. Deploy to GitHub (manual)
4. Deploy to GitHub Pages (CI automated)
5. Contributing
6. License

Usage
- Open any of the HTML files in a browser to try the calculators locally.

Run locally
Use a minimal HTTP server (recommended to avoid CORS/file issues):

```bash
# using Python 3
python -m http.server 8000

# or using npm serve
npx serve .
```

Then open http://localhost:8000 in your browser.

Deploy to GitHub (manual)
1. Create a new repository on GitHub named `CashWise` (or your preferred name).
2. Initialize git locally (if not already), add files and push:

```bash
git init
git add --all
git commit -m "Initial commit — CashWise personal finance calculators"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Deploy to GitHub Pages (automated via Actions)
- This repository includes a workflow at `.github/workflows/pages.yml` that publishes the repository root to GitHub Pages on each push to `main`.
- After the first successful Actions run, enable GitHub Pages in the repository settings and select the `gh-pages` branch (if required).

Contributing
- Contributions and improvements are welcome. Create issues for bugs or feature requests.

License
- Add a license file if you want to open-source this project (MIT is a common choice).

Next steps I can take for you
- Initialize the local git repository and make the first commit
- Create the GitHub repository using the GitHub CLI (`gh`) if you want me to prepare the command
- Push and trigger the Pages workflow (you'll need to run `git push` locally with your credentials)

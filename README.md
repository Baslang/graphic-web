# Graphic Web — Portfolio Starter

A responsive static portfolio website starter for a multidisciplinary design practice.

## Contents
- `index.html` — page content and metadata
- `styles.css` — responsive design system and project visuals
- `script.js` — mobile navigation, project filters, and footer year
- `.gitignore` — excludes local secrets and generated files

## Run locally
You can open `index.html` directly in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Render
This is a static site. After uploading the files to a **new private GitHub repository**, create a new Static Site in Render and select that repository.

- Build command: leave blank (no build step is required)
- Publish directory: `.`

Do not change, deploy, or connect this project to any `nomba-payment-hackathon` service.

## Security
- No API keys, passwords, tokens, or payment credentials are included.
- Never commit `.env` files, private keys, passwords, access tokens, or customer data.
- If server-side secrets are needed in the future, store them in Render environment variables and use them only in server-side code. Never place secret values in frontend HTML, CSS, or JavaScript.
- A private GitHub repository does not make the deployed website private. Visitors can inspect the HTML, CSS, JavaScript, and all assets delivered to their browser.

## Before publishing
- Replace the fictional concept projects with your own work or clearly labeled speculative concepts.
- Replace `hello@graphicweb.example` in `index.html` with your real business contact email.
- Add your real portfolio links and project descriptions.
- The contact CTA currently opens an email draft; it does not submit to a backend.

# Quality Assessment

A bilingual English-Arabic quality-assessment quiz with 30 questions.

## Run locally

Open `index.html` in a browser. The site is static and does not require a build step or package installation.

## Publish with GitHub Pages

1. Push the project to the `main` branch of `gitbhub998-collab/quality`.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.

The page uses relative paths for its scripts, stylesheet, logo, favicon, and audio, so it works from the repository root and the GitHub Pages project subpath.

## Deploy with Vercel

Import `gitbhub998-collab/quality` into Vercel and deploy the project root. `vercel.json` configures the HTML, stylesheet, scripts, logo, favicon, and audio as static assets.

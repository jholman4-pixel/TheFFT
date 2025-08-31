# The Florida Football Team — Static Website

This folder contains a ready-to-deploy static website for **The Florida Football Team**.

## Files
- `index.html` — Homepage
- `press-release.html` — Official announcement
- `team.html` — Identity & mascot
- `contact.html` — Contact form (front-end only)
- `styles.css` — Global styles
- `script.js` — Minimal JS
- `/assets/logo.svg` — Vector logo (shield + flag)

## How to Host for Free

### Option A: GitHub Pages
1. Create a new repo on GitHub (public).
2. Upload all files from this folder.
3. In repo settings, enable **Pages** (deploy from **main** branch, root).
4. Your site will be available at: `https://<username>.github.io/<reponame>/`.
5. Add your custom domain **TheFloridaFootballTeam.com** in Pages settings and create two DNS records at your domain registrar:
   - `A` records pointing to GitHub Pages IPs (see GitHub docs).
   - `CNAME` record for `www` pointing to `<username>.github.io`.
6. Add a `CNAME` file at the project root containing: `TheFloridaFootballTeam.com`.

### Option B: Netlify (drag & drop)
1. Go to Netlify and create an account.
2. Drag this folder into the **Sites** area.
3. In Netlify Domain Settings, add **TheFloridaFootballTeam.com** and follow the DNS instructions.

---

**Note:** You must register the domain **TheFloridaFootballTeam.com** with a registrar (Namecheap, GoDaddy, etc.) before you can point it to your free host.

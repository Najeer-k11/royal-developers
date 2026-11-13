# Royal Developers — Website

Static React (Vite) website for Royal Developers. No backend required.

```bash
npm install
npm run dev       # local development
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, S3, cPanel, …).

## Editing content

All content lives in `src/data/` — no component changes are needed.

| File | What it controls |
| --- | --- |
| `company.js` | Company copy, founder details, values, contact details, WhatsApp, social links, form endpoint |
| `projects.js` | Project portfolio (name, location, category, status, photos, details) |
| `gallery.js` | Gallery photographs and their categories |
| `images.js` | How photos are loaded (read the notes at the top) |

Anything written in `[square brackets]` is a placeholder to replace, e.g. `[Founder Name]`, `[Phone number]`.

### Photographs

The architectural photographs in `src/assets/photos/` are **licence-free stock placeholders (Unsplash)**,
not Royal Developers properties. Replace them with real project photography before launch:

1. Export as WebP, ~1600px on the long edge → `my-photo.webp` (optionally an 800px `my-photo-sm.webp`).
2. Place it in `src/assets/photos/` and add its size to `manifest.json`.
3. Reference it in `projects.js` / `gallery.js` with `photo('my-photo', 'Alt text')`.

### Contact form

The site is static, so the form cannot send email by itself. Set `contact.form.endpoint` in
`company.js` to a form service URL that accepts JSON POST (Formspree, Web3Forms, Getform, or your own API).
Until then the form validates input and, if `contact.email.value` is set, opens the visitor's email app
with the message pre-filled; otherwise it clearly tells the visitor the message was not sent.
Delivery logic lives in `src/lib/submitContact.js`.

## Brand assets

Originals are in `assets/` (`logo.jpeg`, `founder.png`). Optimised web versions used by the site are in
`src/assets/brand/` — the logo has a transparent background cut from the original artwork so it sits
cleanly on the dark header and footer.

## Hosting on GitHub Pages

A workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Create a repository on GitHub and push this project to its `main` branch.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The site is published at `https://<username>.github.io/<repository>/` (see the **Actions** tab for progress).

For a custom domain (e.g. `www.royaldevelopers.com`), add it under **Settings → Pages → Custom domain**
and create the DNS records GitHub shows you.

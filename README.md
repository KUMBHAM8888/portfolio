# Sai Teja K · Portfolio

**DevOps Engineer · Platform Engineer · SRE · AIOps**

🔗 **Live site:** https://kumbham8888.github.io

[![Deploy portfolio](https://github.com/KUMBHAM8888/KUMBHAM8888.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/KUMBHAM8888/KUMBHAM8888.github.io/actions/workflows/deploy.yml)

My portfolio, with a cinematic red-on-black interface. It opens straight to the main page: name, summary and resume first, then results, experience, projects and skills. Every push to `main` is validated and deployed by a GitHub Actions pipeline, the same way I ship production services.

---

## Contents

- [What's on the site](#whats-on-the-site)
- [Tech stack](#tech-stack)
- [Architecture](#architecture)
- [How I built it](#how-i-built-it)
- [CI/CD pipeline](#cicd-pipeline)
- [Project structure](#project-structure)
- [Updating the content](#updating-the-content)
- [Run it locally](#run-it-locally)
- [Roadmap](#roadmap)
- [Contact](#contact)

---

## What's on the site

| Section | What it shows |
|---|---|
| **Banner** | My name, summary, roles, and **Resume** and **Contact** buttons over a cinematic portrait |
| **Current Focus** | Current role and work in progress |
| **Key Results** | Measured outcomes: 60% less provisioning, 40% fewer failed deployments, release windows from 4h to under 1h, and more |
| **Experience** | Verizon, JPMorgan Chase and NextEra Energy as tabs. Each shows the project, summary and numbered highlights |
| **Projects** | Project cards with generated cover art. Select one for the details, features, tech stack and architecture flow |
| **Skills** | CI/CD, containers, IaC, cloud, DevSecOps, observability, scripting and AI |
| **Certifications & Education** | AWS Certified Developer – Associate and MS in Computer Science |
| **Get in touch** | Email (with copy button), LinkedIn, GitHub and the resume PDF |


---

## Tech stack

| Layer | Tool |
|---|---|
| Markup | HTML5 with `<dialog>` for overlays |
| Styling | Hand-written CSS with custom properties (no framework) |
| Behavior | Vanilla JavaScript, no dependencies, no build step |
| Content | One data file: `assets/js/data.js` |
| Fonts | Google Fonts: Big Shoulders Display, Instrument Sans, JetBrains Mono |
| CI | GitHub Actions: `html-validate`, `node --check`, required-file checks |
| CD / Hosting | GitHub Pages via `actions/deploy-pages`, HTTPS by default |

---

## Architecture

```mermaid
flowchart LR
    A[Edit data.js or index.html<br/>in VS Code] -->|git push main| B[GitHub repo]
    B --> C[GitHub Actions]
    subgraph Pipeline
      C --> D[validate job<br/>html-validate · node --check · file checks]
      D -->|pass| E[deploy job<br/>upload-pages-artifact · deploy-pages]
    end
    E --> F[GitHub Pages CDN<br/>HTTPS]
    F --> G[Recruiters &amp; visitors<br/>kumbham8888.github.io]
```

If any check fails, the deploy job never runs, so a broken page can't go live. The previous version stays up.

```mermaid
flowchart TB
    D[data.js<br/>profile · order · focus · results · experience · projects · skills · credentials] --> APP[app.js]
    APP --> R[Sections: Focus · Results · Experience · Projects · Skills · Credentials]
    APP --> M[Overlay: project details]
```

---

## How I built it

1. **Content first.** Every fact comes from my resume, organized into the sections recruiters scan for.
2. **One source of truth.** All content lives in `assets/js/data.js`. `app.js` renders every row from it, so updating the site means editing one file.
3. **Straight to the point.** No intro screens: visitors land on my name, summary and the Resume button, then results first.
4. **Generated cover art.** Project covers are SVG drawn in code from a two-color palette and a motif (rings, pulse, stack), so there are no image files to manage.
5. **Design tokens.** Colors, fonts and spacing are CSS custom properties in `:root`.
6. **Mobile-first rows.** Rows scroll sideways with snap points on touch devices, and arrow buttons appear only on devices with a mouse.
7. **Accessibility.** Native `<dialog>` overlays (Esc closes, focus is managed), tab roles for the experience switcher, visible focus states, and `prefers-reduced-motion` turns off all animation.
8. **Privacy.** The public resume PDF leaves out my phone number.
9. **Link previews.** Open Graph tags so the URL shows my photo and title on LinkedIn.
10. **Shipped through CI/CD.** GitHub Actions validates and deploys every push to `main`.

---

## CI/CD pipeline

Workflow file: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

| Step | What happens |
|---|---|
| **Trigger** | `push` to `main`, or a manual run (`workflow_dispatch`) |
| **validate** | `html-validate` on `index.html` (rules in `.htmlvalidate.json`), `node --check` on both JavaScript files, and a check that every required file exists |
| **deploy** | Runs only if validate passes: configure Pages, upload the site as an artifact, publish with `actions/deploy-pages` |
| **Permissions** | Least privilege: `contents: read`, `pages: write`, `id-token: write` (OIDC for Pages) |
| **Concurrency** | One deployment at a time; a newer push cancels an older in-progress run |

---

## Project structure

```
.
├── index.html                    # Page shell: nav, banner, contact section, dialog
├── assets/
│   ├── css/style.css             # All styles and design tokens
│   ├── js/data.js                # ALL content (edit this to update the site)
│   ├── js/app.js                 # Renders rows and project overlays
│   ├── photo.jpg                 # Portrait (banner and link previews)
│   └── Sai_Teja_K_Resume.pdf     # Public resume (phone number removed)
├── .github/workflows/deploy.yml  # CI/CD: validate, then deploy to GitHub Pages
├── .htmlvalidate.json            # HTML lint rules used in CI
└── README.md
```

---

## Updating the content

Edit **`assets/js/data.js`**, commit and push. The pipeline does the rest.

| To change | Edit in `data.js` |
|---|---|
| Email, links, resume, photo | `profile` |
| Order of the sections | `order` |
| Current Focus cards | `focus` |
| Headline numbers | `results` |
| Jobs and highlights | `experience` |
| Projects (cards and detail view) | `projects` (add an object and it appears automatically) |
| Skills | `skills` |
| Certifications and education | `certifications`, `education` |

The banner text is in `index.html`. To change the photo or resume, replace the files in `assets/` and keep the same names.

---

## Run it locally

```bash
git clone git@github.com:KUMBHAM8888/KUMBHAM8888.github.io.git
cd KUMBHAM8888.github.io
python -m http.server 8000        # then open http://localhost:8000

# The same checks CI runs
npx html-validate index.html
node --check assets/js/data.js
node --check assets/js/app.js
```

---

## Roadmap

**Next: AWS with Infrastructure as Code**

- [ ] Terraform: S3 + CloudFront + ACM + Route 53 for a custom domain
- [ ] GitHub Actions deploy to S3 with OIDC (no long-lived AWS keys)
- [ ] Visitor counter with API Gateway + Lambda + DynamoDB
- [ ] Uptime check and an AWS billing alert

---

## Contact

- **Email:** saitejagoudk01@gmail.com
- **LinkedIn:** [in/saitejagoudk](https://www.linkedin.com/in/saitejagoudk/)
- **GitHub:** [KUMBHAM8888](https://github.com/KUMBHAM8888)

Open to DevOps, Platform Engineering and SRE roles, remote or with relocation.

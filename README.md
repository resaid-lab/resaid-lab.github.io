# reSAID Lab Website

**Responsible Software and AI Design Lab**  
Case Western Reserve University  
[https://resaid-lab.github.io](https://resaid-lab.github.io)

---

## About

This repository contains the source for the reSAID Lab website, built with
[Hugo](https://gohugo.io) and deployed to [GitHub Pages](https://pages.github.com)
via GitHub Actions. All content is written in Markdown and maintained through
GitHub pull requests.

---

## Quick Start (Local Development)

### 1. Install Hugo

**macOS (Homebrew):**
```bash
brew install hugo
```

**Linux (snap):**
```bash
sudo snap install hugo
```

**Windows (Chocolatey):**
```bash
choco install hugo-extended
```

Verify the installation:
```bash
hugo version
# Should show v0.160.x or newer, extended edition
```

### 2. Clone the repository

```bash
git clone https://github.com/resaid-lab/resaid-lab.github.io.git
cd resaid-lab.github.io
```

### 3. Run locally

```bash
hugo server -D
```

Open [http://localhost:1313](http://localhost:1313) in your browser.
The site auto-reloads when you save changes.

---

## How to Update Content

### Add or Edit a Person Profile

1. Create a new file in `content/people/` (e.g., `content/people/jane-doe.md`)
   ```bash
   hugo new --kind people people/jane-doe.md
   ```
2. Edit the file — fill in `role`, `email`, `website`, `github`, `photo`, `bio`, etc.
3. Available roles: `pi`, `phd`, `ms`, `undergrad`, `k12`, `collaborator`, `alumni`
4. Add a photo to `static/images/people/` and set `photo: /images/people/jane-doe.jpg`

### Add a Publication

1. Create a new file in `content/publications/`:
   ```bash
   hugo new --kind publications publications/my-paper-venue-year.md
   ```
2. Edit the front matter — fill in `title`, `authors`, `venue`, `year`, `doi`, `pdf`,
   `code`, etc.
3. Add the BibTeX entry in the `bibtex` field

### Add a Project

1. Create a new file in `content/projects/`:
   ```bash
   hugo new --kind projects projects/my-project-name.md
   ```
2. Fill in `title`, `description`, `status`, `github`, `people`, etc.
3. Set `featured: true` to show it on the homepage

### Add a News Item

1. Create a new file in `content/news/`:
   ```bash
   hugo new --kind news news/paper-accepted-venue-year.md
   ```
2. Set the `date`, `description`, and optionally a `link`

---

## GitHub Pull Request Workflow

All content updates go through pull requests. **Do not push directly to `main`.**

### Step-by-step

1. **Create a branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b add-paper-icse-2026
   ```

2. **Make your changes** — add or edit Markdown files, add images, etc.

3. **Test locally** (optional but recommended):
   ```bash
   hugo server -D
   ```

4. **Commit and push**:
   ```bash
   git add content/publications/my-paper.md
   git commit -m "Add ICSE 2026 paper"
   git push origin add-paper-icse-2026
   ```

5. **Open a pull request** on GitHub. Use the PR template to describe your change.

6. **Request a review** from a lab admin.

7. **Merge** after approval. The site deploys automatically.

### Recommended Branch Names

| Type             | Branch name pattern             |
|------------------|---------------------------------|
| Add a paper      | `add-paper-venue-year`          |
| Update profile   | `update-profile-name`           |
| Add a profile    | `add-profile-name`              |
| Add news         | `add-news-month-year`           |
| Add a project    | `add-project-name`              |
| Fix content      | `fix-content-description`       |

---

## Repository Structure

```
resaid-lab.github.io/
├── .github/
│   ├── workflows/deploy.yml      # GitHub Actions build & deploy
│   └── PULL_REQUEST_TEMPLATE.md  # PR checklist
├── archetypes/                   # Templates for hugo new command
│   ├── people.md
│   ├── publications.md
│   ├── projects.md
│   └── news.md
├── assets/                       # Processed by Hugo Pipes
│   ├── css/                      # Stylesheets (main.css, fonts.css)
│   └── js/main.js                # Site JavaScript
├── content/
│   ├── _index.md                 # Home page
│   ├── people/                   # Person profiles
│   ├── publications/             # Paper entries
│   ├── projects/                 # Project descriptions
│   ├── news/                     # News items
│   ├── research/_index.md        # Research themes page
│   └── join/_index.md            # Join Us page
├── data/
│   └── themes.yaml               # Research theme descriptions
├── layouts/                      # Hugo templates
│   ├── _default/
│   ├── partials/
│   ├── people/
│   ├── publications/
│   ├── projects/
│   ├── news/
│   ├── join/
│   ├── research/
│   └── index.html                # Home page layout
├── static/
│   └── images/                   # Lab photos, avatars
├── hugo.yaml                     # Hugo configuration
└── README.md
```

---

## Deployment

The site deploys automatically to GitHub Pages when changes are merged to `main`.

- **Trigger:** Push to `main`
- **Build:** GitHub Actions runs `hugo --minify`
- **Deploy:** Output uploaded to the `github-pages` environment
- **URL:** [https://resaid-lab.github.io](https://resaid-lab.github.io)

Pull request builds run `hugo` for validation but do **not** deploy.

---

## Questions?

Contact [sumon@case.edu](mailto:sumon@case.edu) or open a GitHub issue.

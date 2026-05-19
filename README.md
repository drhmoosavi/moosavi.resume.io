# Hossein Moosavi Website 

Hugo-based academic website and blog for `drhmoosavi/drhmoosavi.github.io` (target).

## Structure

```text
.
├── content/
│   ├── posts/
│   ├── publications/
│   ├── projects/
│   ├── about/
│   └── research/
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── assets/
├── themes/
├── layouts/
├── hugo.toml
├── netlify.toml
└── README.md
```

## Local Development

```bash
hugo server -D
```

## Production Build

```bash
hugo --gc --minify
```

## Content Contracts

Use the following front matter keys for `posts`, `publications`, `projects`, and `about` content:

- Required: `title`, `date`, `slug`, `draft`
- Optional: `summary`, `tags`, `categories`, `authors`, `links`, `featured`

Blog URLs are served under `/blog/`.

## Publishing Targets

- Primary target (GitHub Pages): `https://drhmoosavi.github.io/`
- Netlify fallback: `https://moosavi-resume-io.netlify.app/`

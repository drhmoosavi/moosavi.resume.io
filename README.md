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

Blog URLs are served under `/blog/`.


# Cybersecurity Portfolio

A high-performance, minimalist portfolio site for cybersecurity engineers, inspired by [rauchg.com](https://rauchg.com) and [leerob.io](https://leerob.io).

## Features

- **Minimalist Design**: Clean, monochrome dark theme with subtle interactions
- **MDX Content**: Write research articles and CTF writeups in MDX format
- **Beautiful Syntax Highlighting**: Powered by `rehype-pretty-code` and `shiki`
- **Table of Contents**: Automatic TOC generation for research articles
- **Performance**: Built with Next.js 15 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX with `next-mdx-remote`
- **Syntax Highlighting**: `rehype-pretty-code` + `shiki`
- **Icons**: `lucide-react`
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
my-app/
├── app/
│   ├── about/          # About page
│   ├── research/       # Research listing and dynamic pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer
│   ├── mdx.tsx        # MDX component mapping
│   └── TableOfContents.tsx  # TOC component
├── content/
│   ├── research/      # Research articles (MDX files)
│   └── writeups/      # CTF writeups (MDX files)
└── lib/
    ├── mdx.ts        # MDX file reading utilities
    ├── date-utils.ts # Date formatting utilities
    └── utils.ts      # Utility functions
```

## Adding Content

### Research Articles

Create a new MDX file in `content/research/`:

```mdx
---
title: "Your Article Title"
date: "2024-01-15"
description: "A brief description"
tags: ["security", "research"]
---

# Your Article Title

Your content here...

\`\`\`python
# Code blocks are automatically highlighted
def hello():
    print("Hello, World!")
\`\`\`
```

### CTF Writeups

Create MDX files in `content/writeups/` following the same format.

## Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --muted: #737373;
  --border: #262626;
}
```

### About Page

Edit `app/about/page.tsx` to update:
- Your story/bio
- Certifications list
- Tools arsenal

### Home Page

Edit `app/page.tsx` to customize the hero section and bio.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT


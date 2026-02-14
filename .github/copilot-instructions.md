# Copilot Instructions for docLife Repository

## Project Overview

**docLife** is a professional Help Desk documentation system designed to provide centralized documentation for multiple software modules (Lifebooks, Kids, Volts, Novo Convertido, Backoffice). The project is built with **Docusaurus** (static site generator) and is designed for easy markdown-based documentation, team collaboration via GitHub, and future AI/WhatsApp bot integration.

**Current Status:** This repository contains the project specification. The Docusaurus project has not yet been initialized.

**Language:** Portuguese (pt-BR) - All documentation and UI text should be in Brazilian Portuguese.

## Technology Stack

- **Framework:** Docusaurus (latest stable version)
- **Runtime:** Node.js with npm
- **Hosting:** Vercel or Netlify (auto-deploy from GitHub)
- **Future Features:** Algolia DocSearch, Decap CMS, AI integration with RAG architecture

## Project Architecture & Layout

### Planned Directory Structure

```
docLife/
├── docs/                          # Documentation source files (Markdown)
│   ├── lifebooks/                 # Main active module
│   │   ├── introducao/            # Introduction section
│   │   ├── conta/                 # Account management docs
│   │   ├── configuracoes/         # Settings docs
│   │   └── erros-comuns/          # Common errors docs
│   ├── novo-convertido/           # Future module placeholders
│   ├── kids/
│   ├── volts/
│   └── backoffice/
├── static/                        # Static assets
│   ├── img/                       # Images organized by module
│   │   ├── lifebooks/
│   │   ├── kids/
│   │   ├── volts/
│   │   └── logo.svg
│   └── fonts/
├── src/                           # Custom components and styles
│   ├── css/custom.css             # Color theme customization
│   └── pages/index.js             # Custom homepage (React)
├── .github/                       # GitHub configuration
│   └── copilot-instructions.md    # This file
├── docusaurus.config.js           # Main Docusaurus configuration
├── sidebars.js                    # Sidebar navigation structure
├── package.json                   # npm dependencies
├── netlify.toml                   # Optional Netlify config
└── README.md                      # Project specification
```

### Key Files

- **README.md:** Complete project specification with color schemes, structure, and implementation checklist
- **docusaurus.config.js:** Site configuration including theme colors, navbar, footer, i18n settings
- **sidebars.js:** Navigation sidebar structure for all modules
- **src/css/custom.css:** Custom CSS with brand colors and dark mode support

## Build & Development Instructions

### Initial Project Setup

**IMPORTANT:** The Docusaurus project needs to be initialized first:

```bash
# Initialize Docusaurus project (only once, when starting fresh)
npx create-docusaurus@latest . classic --typescript false

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production (outputs to build/ directory)
npm run build

# Test production build locally
npm run serve

# Clear Docusaurus cache (if experiencing issues)
npm run clear
```

### Important Notes

- **Always run `npm install` before building** if package.json has changed
- Development server supports hot reloading
- Build command must complete successfully before deploying
- The build directory should not be committed to git (it's in .gitignore)

## Content & Documentation Standards

### Markdown Frontmatter Template

**All documentation files MUST include this frontmatter:**

```yaml
---
id: nome-do-arquivo
title: Título Completo da Página
sidebar_label: Nome Curto no Menu
description: Descrição breve para SEO e IA (máx 160 caracteres)
keywords: [palavra1, palavra2, palavra3]
tags: [categoria, tipo]
module: lifebooks
---
```

### Document Structure Template

```markdown
# Título Principal

## 📌 Quando usar
Contexto de quando o usuário deve seguir este guia.

## ✅ Passo a passo
1. Primeiro passo
2. Segundo passo
3. Terceiro passo

## ⚠️ Problemas comuns
- **Erro X:** Solução Y
- **Erro Z:** Solução W

## 🔗 Artigos relacionados
- [Link para outro artigo](../outro-artigo)

## 🔎 Palavras-chave para busca
termo1, termo2, termo3
```

### Documentation Rules

1. **One file = One question/problem** - Keep docs focused
2. **Descriptive titles** - Use "Como ativar conta" instead of "Ativação"
3. **Images with alt text** - Always: `![Descrição](../img/lifebooks/screenshot.png)`
4. **Relative links** - Use `../` for navigation between folders
5. **Language** - All content in Brazilian Portuguese (pt-BR)

## Design System

### Brand Colors (CSS Variables)

```css
:root {
  /* Primary Colors */
  --ifm-color-primary: #2c3c63;           /* Dark blue */
  --ifm-color-primary-dark: #26354d;
  --ifm-color-primary-darker: #233047;
  --ifm-color-primary-darkest: #1c2739;
  --ifm-color-primary-light: #324479;
  --ifm-color-primary-lighter: #354a7f;
  --ifm-color-primary-lightest: #3d5495;
  
  /* Secondary Colors */
  --ifm-color-secondary: #4e79f9;         /* Royal blue */
  
  /* Background */
  --ifm-background-color: #fff;
  --ifm-card-background-color: #f7f8f8;
  
  /* Text */
  --ifm-font-color-base: #262b29;
}
```

**Always use these colors when customizing the theme.** Do not introduce new colors without confirming with the specification in README.md.

## Configuration Guidelines

### docusaurus.config.js Key Settings

- **i18n:** Default locale is `pt-BR`
- **baseUrl:** `/` (for root deployment)
- **onBrokenLinks:** Set to `'warn'` (not `'throw'`) to allow development with incomplete links
- **Navbar:** Includes module navigation and dropdown for future modules
- **Footer:** Dark theme with documentation links and support options

### sidebars.js Structure

Organized by module with category icons:
- 🚀 Introdução
- 👤 Conta
- ⚙️ Configurações
- ⚠️ Erros Comuns

## Deployment

### Vercel Configuration

- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### Netlify Configuration

- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- Optional: Use `netlify.toml` for advanced configuration

**Auto-deploy:** Both platforms auto-deploy on push to `main` branch

## Validation & Testing

### Before Committing

1. Ensure all markdown files have complete frontmatter
2. Verify images exist at specified paths
3. Check that relative links work correctly
4. Run `npm run build` to catch any build errors
5. Test locally with `npm run serve`

### Common Build Issues

- **Missing images:** Ensure all referenced images exist in `static/img/`
- **Broken links:** Use relative paths correctly (`../` for parent directory)
- **Invalid frontmatter:** Check YAML syntax in markdown files
- **Node version:** Use Node.js 18.x or higher (Docusaurus requirement)

## Future Integration Notes

### AI/WhatsApp Bot Preparation

The documentation structure is designed for future AI integration:
- **Rich frontmatter:** Provides metadata for semantic search
- **Keywords:** Enable better search indexing
- **Structured content:** Makes parsing easier for RAG systems
- **Module organization:** Allows context-specific responses

### Search Integration (Phase 4)

- **Algolia DocSearch:** Free for open-source/public docs
- **Alternative:** Supabase + pgvector for private repos
- Configuration added to `docusaurus.config.js` when ready

## Working with this Repository

### When Making Changes

1. **Trust these instructions** - Only search if information is incomplete or incorrect
2. **Follow the structure** - Maintain the planned directory layout from README.md
3. **Use templates** - Apply frontmatter and structure templates consistently
4. **Test builds** - Always run `npm run build` before committing significant changes
5. **Preserve language** - Keep all content in Portuguese (pt-BR)
6. **Respect the design system** - Use only the specified brand colors
7. **One issue = One doc** - Keep documentation files focused and concise

### Common Tasks

**Adding a new documentation page:**
1. Create `.md` file in appropriate module folder (e.g., `docs/lifebooks/conta/`)
2. Include complete frontmatter with all required fields
3. Follow the document structure template
4. Add images to `static/img/[module]/`
5. Update `sidebars.js` to include the new page
6. Build and test locally

**Customizing theme:**
1. Edit `src/css/custom.css` for styling changes
2. Edit `docusaurus.config.js` for navbar/footer/config changes
3. Use only the brand colors from the design system
4. Test in both light and dark modes

**Adding a new module:**
1. Create directory structure under `docs/[module-name]/`
2. Add placeholder file with frontmatter
3. Update `sidebars.js` with new module entry
4. Add navbar item in `docusaurus.config.js`
5. Create image folder in `static/img/[module-name]/`

## Important Reminders

- **Initialize Docusaurus first** if starting from the specification
- **Always run npm install** before building
- **Build must succeed** before deploying
- **All content in Portuguese** (pt-BR)
- **Follow frontmatter template** for all markdown files
- **Use brand colors only** from the design system
- **Test locally** with `npm run serve` after building
- **Markdown files = Documentation content** (not planning/notes)

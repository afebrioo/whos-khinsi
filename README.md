# Khansa Fauzia Zahra — Legal Portfolio

A personal legal portfolio website built for **Khansa Fauzia Zahra** 🤍, designed with a warm cream-and-brown editorial monograph aesthetic, soft organic curves, serif typography, and delicate calligraphic script accents.

**Live Site:** [afebrioo.github.io/whos-khinsi](https://afebrioo.github.io/whos-khinsi/)

---

## Highlights

- **Warm Editorial Palette:** Crafted in layered parchment cream, toasted linen, ivory, caramel, espresso, and dark cocoa tones—solid paper surfaces with subtle grain texture and zero glassmorphism.
- **Refined Typography:** Pairs `Cormorant Garamond` for editorial headings, `Pinyon Script` for subtle calligraphic touches, and `Plus Jakarta Sans` for crisp readability.
- **Soft Organic Geometry:** Rounded pill controls, smooth section transitions, and an arched portrait frame designed to look complete both as a monogram placeholder and with a real portrait.
- **Single-Source Content:** All biography details, experiences, academic publications, honors, certifications, and media slots live in `src/data/profile.ts`.
- **Responsive & Accessible:** Clean layout across desktop, tablet, and mobile with gentle scroll-reveal transitions and one-click email copying.

---

## Design System

| Role | Token | Hex |
| :--- | :--- | :--- |
| Primary Canvas | `cream` | `#F7F3EC` |
| Secondary Surface | `linen` | `#EFE8DC` |
| Paper Surface | `ivory` | `#FBF9F5` |
| Primary Ink | `espresso` | `#2B1F19` |
| Secondary Ink | `walnut` | `#5B483D` |
| Warm Accent | `caramel` | `#9A6A4B` |
| Contrast Footer Band | `cocoa` | `#35251D` |

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

---

## Project Structure

```text
.
├── .github/workflows/
│   └── deploy.yml              # Automatic build & deploy to GitHub Pages
├── public/
│   └── images/                 # Drop Khansa's portrait photo here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx     # Includes arched PortraitFrame (placeholder / photo)
│   │   ├── PracticePillars.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── PublicationsSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   └── ContactFooter.tsx
│   ├── data/
│   │   └── profile.ts          # Centralized portfolio data, photo & CV paths
│   ├── hooks/
│   │   └── useRevealOnScroll.ts
│   ├── App.tsx
│   ├── index.css               # Theme tokens, typography utilities & paper grain
│   └── main.tsx
├── index.html
└── vite.config.ts
```

---

## Updating Content, Photo & CV

Everything can be updated from [`src/data/profile.ts`](src/data/profile.ts) without modifying component layouts:

1. **Add Portrait Photo**
   - Place the image in `public/images/` (e.g. `public/images/khansa.jpg`).
   - Update `portraitImage` in `src/data/profile.ts`:
     ```ts
     portraitImage: '/images/khansa.jpg',
     ```
2. **Enable Curriculum Vitae Download**
   - Place the PDF in `public/` (e.g. `public/Khansa-Fauzia-Zahra-CV.pdf`).
   - Set `cvUrl` in `src/data/profile.ts`:
     ```ts
     cvUrl: '/Khansa-Fauzia-Zahra-CV.pdf',
     ```
3. **Add Publication Links or Experience Details**
   - Fill in `url` on items inside `publications`, or update `summary` / `groups` inside `experiences`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

This repository deploys automatically to **GitHub Pages** whenever changes are pushed to the `main` branch via `.github/workflows/deploy.yml`.

To ensure GitHub Pages is active on the repository:
1. Open **Settings → Pages** in GitHub.
2. Under **Build and deployment → Source**, select **GitHub Actions**.

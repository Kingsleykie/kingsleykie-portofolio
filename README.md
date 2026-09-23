# Kingsley Kie - Portfolio Website

A clean, modern, performant, and fully responsive personal portfolio website built with **Next.js (App Router)**, **JavaScript (.jsx)**, and **CSS Modules**.

## 🎨 Theme Palette (Clean Light Mode)
- **Background**: `#f8fafc` (Clean Slate 50)
- **Cards / Containers**: `#ffffff` (Pure White with subtle `#e2e8f0` borders & soft shadows)
- **Accent / Buttons**: `#0284c7` (Vibrant Sky Blue / Ocean 600 with `#0369a1` hover)
- **Text Headings & Logo**: `#0f172a` (Dark Slate 900)
- **Body & Description Text**: `#334155` (Slate 700) & `#64748b` (Slate 500)
- **Badges & Soft Accents**: `#e0f2fe` background with `#0284c7` text & `#bae6fd` border

## 📁 Project Structure
```text
├── app/
│   ├── globals.css          # Theme variables, CSS reset, smooth scroll
│   ├── layout.js            # Root layout with Google Font (Poppins) & SEO metadata
│   ├── page.js              # Complete portfolio single-page component
│   └── page.module.css      # Scoped CSS Module styling (Clean Light Mode)
├── public/
│   ├── profile.svg          # Stylized light profile image placeholder
│   ├── project-mrcoffee.svg # Mr.Coffee project banner (Light theme)
│   ├── project-cyberlearn.svg # CyberLearn project banner (Light theme)
│   └── project-catchfit.svg # CatchFit project banner (Light theme)
├── next.config.mjs          # Next.js configuration
├── package.json             # Core dependencies (next, react, react-dom)
└── README.md
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio live.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

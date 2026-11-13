# Prasanth V — GIS Portfolio

Premium personal portfolio website built with **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build
npm start          # Serve production build
```


| What to change | Where |
|---|---|
| Name, email, phone, social links | `profile` object |
| About summary & highlights | `about` object |
| Skills & proficiency levels | `skillCategories` array |
| Internship/work experience | `experience` array |
| Projects (title, images, tech) | `projects` array |
| Education | `education` array |
| Certifications & workshops | `certifications`, `workshops` |

## 🎨 Colours

Edit `tailwind.config.ts` → `theme.extend.colors.geo` to change the accent palette.

## 📸 Project Images

Replace the Unsplash URLs in `lib/data.ts → projects[].image` with your own screenshots.
Store them in `public/projects/` and reference as `/projects/my-project.jpg`.

## 🔗 Contact Form

The form currently uses a `setTimeout` mock. To make it functional, replace it with:
- **Resend** (recommended): create an API route at `app/api/contact/route.ts`
- **Formspree**: replace `onSubmit` with a `fetch("https://formspree.io/f/YOUR_ID",...)`
- **EmailJS**: client-side, no backend needed

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       ← all CSS utilities
│   ├── layout.tsx        ← SEO metadata + ThemeProvider
│   └── page.tsx          ← section assembly
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx / ProjectCard.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── StatCounter.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── data.ts           ← ✅ Edit all your content here
```

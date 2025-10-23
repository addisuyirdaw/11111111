# Addisu Lal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, professional design with custom color scheme
- Responsive layout for all devices
- Smooth scrolling navigation
- Project showcase section
- Skills display
- Resume & cover letter download section
- Contact form
- SEO optimized

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Customization Guide

### Adding Your Content

#### 1. Projects (`/src/components/Projects.tsx`)

Replace the placeholder projects with your actual projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    status: 'Completed',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Feature 1',
      'Feature 2',
    ],
    icon: Globe,
    color: 'blue'
  }
];
```

#### 2. Resume & Cover Letter (`/src/components/Resume.tsx`)

1. Add your PDF files to the `/public` folder
2. Update the href attributes:
```typescript
<a href="/resume.pdf" download>
```

#### 3. Contact Information

Update email and social links in:
- `/src/components/Hero.tsx`
- `/src/components/Contact.tsx`
- `/src/components/Header.tsx`
- `/src/components/Footer.tsx`

Search for `addisulal@gmail.com` and replace with your email.
Update social media links:
- YouTube: `https://youtube.com/@adlal-me`
- LinkedIn: Add your LinkedIn URL
- GitHub: Add your GitHub URL

#### 4. Personal Information

Update your name and details throughout the components:
- Hero section (`/src/components/Hero.tsx`)
- About section (`/src/components/About.tsx`)
- Footer (`/src/components/Footer.tsx`)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## Color Scheme

The site uses a professional color palette:

- **Primary Dark**: `#0d1b2a` - Deep blue for headers and buttons
- **Primary Medium**: `#1b4965` - Hover states
- **Accent**: `#e0e1dd` - Soft gray for backgrounds
- **Accent Secondary**: Teal shades for highlights

## File Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation bar
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About me section
│   ├── Experience.tsx   # Education & experience
│   ├── Projects.tsx     # Project showcase
│   ├── Skills.tsx       # Skills display
│   ├── Resume.tsx       # Resume download section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer section
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Support

For issues or questions about customization, please refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## License

This project is open source and available for personal use.

---

Built with purpose by Addisu Lal

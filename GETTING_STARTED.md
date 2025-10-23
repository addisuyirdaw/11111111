# Getting Started with Your Portfolio

Welcome! This guide will help you get your portfolio website up and running quickly.

## Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

---

## What You Have

✅ **Fully functional portfolio website** with:
- Hero/landing section with introduction
- About section highlighting your background
- Education & Experience section
- Projects showcase (with placeholder content)
- Skills display (Technical & Professional)
- Resume & Cover Letter download section
- Contact form
- Responsive footer

✅ **Professional design** using:
- Deep blue (#0d1b2a) color scheme
- Soft gray (#e0e1dd) accents
- Teal highlights
- Clean, modern typography
- Smooth animations and transitions

✅ **Mobile responsive** - Works on all devices

✅ **SEO optimized** - Proper meta tags included

---

## Next Steps

### Step 1: Customize Your Content (30-60 minutes)

Follow the `CUSTOMIZATION.md` guide to update:

1. **Personal Info** (5 min)
   - Name, email, bio
   - Social media links

2. **Projects** (15 min)
   - Replace placeholder projects
   - Add your actual project descriptions
   - Update tech stacks

3. **Resume Files** (5 min)
   - Add PDF files to `/public` folder
   - Update download links

4. **Skills** (5 min)
   - Review and update skill lists
   - Adjust proficiency levels

5. **Experience** (10 min)
   - Add your work history
   - Update education details

### Step 2: Add Your Documents

```
/public/
  ├── resume.pdf          ← Add your resume here
  ├── cover-letter.pdf    ← Add your cover letter here
  └── favicon.ico         ← (Optional) Add your favicon
```

### Step 3: Test Everything

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Check:
- [ ] All sections scroll smoothly
- [ ] Contact form works
- [ ] Social links open correctly
- [ ] Mobile view looks good
- [ ] Resume downloads work (after adding PDFs)

### Step 4: Deploy Your Site (15 minutes)

See `DEPLOYMENT.md` for detailed instructions.

**Recommended: Vercel (Easiest)**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

Your site will be live at `https://your-project.vercel.app`

---

## File Structure

```
portfolio/
├── public/                  # Static files
│   ├── resume.pdf          # ← Add your resume
│   └── cover-letter.pdf    # ← Add your cover letter
│
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About section
│   │   ├── Experience.tsx  # Education & work
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Skills.tsx      # Skills display
│   │   ├── Resume.tsx      # Download section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   │
│   ├── App.tsx             # Main app
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
│
├── README.md               # Overview & tech info
├── CUSTOMIZATION.md        # Detailed customization guide
├── DEPLOYMENT.md           # Deployment instructions
└── package.json            # Dependencies
```

---

## Important Files to Edit

### Must Edit:
1. `/src/components/Hero.tsx` - Your name and intro
2. `/src/components/About.tsx` - Your story
3. `/src/components/Projects.tsx` - Your projects
4. `/src/components/Contact.tsx` - Your email and socials

### Should Edit:
5. `/src/components/Skills.tsx` - Your skills
6. `/src/components/Experience.tsx` - Your education/work
7. `/src/components/Resume.tsx` - Resume download links

### Can Edit:
8. `/src/components/Header.tsx` - Navigation
9. `/src/components/Footer.tsx` - Footer content
10. `/index.html` - Page title and meta tags

---

## Tips for Success

### Content Tips:
- ✅ Use clear, concise language
- ✅ Focus on accomplishments and impact
- ✅ Include measurable results where possible
- ✅ Keep technical jargon minimal
- ✅ Show personality in your bio

### Design Tips:
- ✅ Use high-quality images (if adding project screenshots)
- ✅ Keep text readable with good contrast
- ✅ Test on mobile devices
- ✅ Don't overuse animations

### Technical Tips:
- ✅ Test build before deploying: `npm run build`
- ✅ Keep dependencies updated
- ✅ Check console for errors
- ✅ Test all links before going live

---

## Common Questions

### Q: How do I change colors?
**A:** Search for `#0d1b2a` (primary blue) and `#e0e1dd` (gray) across components and replace with your preferred colors.

### Q: Can I add more sections?
**A:** Yes! Create a new component in `/src/components/` and add it to `App.tsx`.

### Q: How do I add images?
**A:** Place images in `/public/` folder and reference them with `/image-name.jpg`.

### Q: The contact form doesn't send emails?
**A:** It currently uses mailto. For a real form, integrate Formspree (see CUSTOMIZATION.md).

### Q: Can I use this for commercial projects?
**A:** Yes, this is your portfolio. Use it however you like!

---

## Getting Help

### Documentation:
- `README.md` - Project overview
- `CUSTOMIZATION.md` - Detailed customization guide
- `DEPLOYMENT.md` - How to deploy

### Resources:
- [React Docs](https://react.dev) - Learn React
- [Tailwind CSS](https://tailwindcss.com) - Styling reference
- [Lucide Icons](https://lucide.dev) - Icon library

### Community:
- Stack Overflow - For technical questions
- GitHub Discussions - For React/Vite questions

---

## Ready to Launch?

1. ✅ Updated all content
2. ✅ Added resume PDFs
3. ✅ Tested locally
4. ✅ Build successful
5. ✅ Ready to deploy!

Follow `DEPLOYMENT.md` to go live! 🚀

---

**Remember:** This is YOUR portfolio. Make it reflect your personality, skills, and aspirations. Don't hesitate to customize further!

Good luck! 🎉

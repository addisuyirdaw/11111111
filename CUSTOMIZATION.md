# Customization Guide

This guide helps you customize the portfolio website with your own content.

## Quick Customization Checklist

Use this checklist to ensure you've updated all necessary content:

### Personal Information
- [ ] Update name from "Addisu Lal" to your name
- [ ] Update email address throughout
- [ ] Add your social media links (YouTube, LinkedIn, GitHub)
- [ ] Update hero tagline and description

### Projects Section
- [ ] Replace placeholder projects with your actual projects
- [ ] Add project images to `/public` folder
- [ ] Update GitHub links for each project
- [ ] Add live demo links if available

### Resume & Documents
- [ ] Add resume PDF to `/public` folder
- [ ] Add cover letter PDF to `/public` folder
- [ ] Update download links in Resume component

### Skills
- [ ] Review and update technical skills list
- [ ] Update skill proficiency percentages
- [ ] Review and update professional skills

### Education & Experience
- [ ] Update education information
- [ ] Add your work experience
- [ ] Update highlights section

---

## Detailed Instructions

### 1. Personal Information

#### Files to Update:
- `/src/components/Hero.tsx`
- `/src/components/Header.tsx`
- `/src/components/Footer.tsx`
- `/src/components/Contact.tsx`

#### Search and Replace:
```
Find: "Addisu Lal"
Replace with: "Your Name"

Find: "addisulal@gmail.com"
Replace with: "your.email@example.com"
```

#### Update Social Links:

In all components, find these URLs and replace:
```typescript
// YouTube
'https://youtube.com/@adlal-me'
→ 'https://youtube.com/@YOUR_CHANNEL'

// LinkedIn (currently placeholder)
'#'
→ 'https://linkedin.com/in/YOUR_PROFILE'

// GitHub (currently placeholder)
'#'
→ 'https://github.com/YOUR_USERNAME'
```

---

### 2. Projects Section

**File:** `/src/components/Projects.tsx`

Replace the `projects` array with your own projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of what the project does and its impact',
    status: 'Completed', // or 'In Progress'
    technologies: ['React', 'Node.js', 'MongoDB'], // Your tech stack
    features: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
      'Key feature 4'
    ],
    icon: Globe, // Choose from: Globe, Code, Database
    color: 'blue' // Options: 'blue', 'green', 'teal'
  },
  // Add more projects...
];
```

#### Adding Project Images:
1. Place image in `/public/projects/` folder
2. Reference in project object (future enhancement)

#### Adding GitHub/Live Demo Links:
Currently, projects have placeholder links. To add real links:

```typescript
// In the project card render section, update:
<a
  href="https://github.com/yourusername/project-name"
  className="..."
>
  <Github className="w-5 h-5" />
</a>
```

---

### 3. Resume & Cover Letter

**File:** `/src/components/Resume.tsx`

#### Step 1: Add PDF Files
Place your files in `/public` folder:
```
/public/
  ├── resume.pdf
  └── cover-letter.pdf
```

#### Step 2: Update Download Links

Find these sections and update the `href`:

```typescript
// Resume download button
<a
  href="/resume.pdf"  // ← Update this path
  download="YourName-Resume.pdf"
  className="..."
>
  Download Resume
</a>

// Cover letter download button
<a
  href="/cover-letter.pdf"  // ← Update this path
  download="YourName-CoverLetter.pdf"
  className="..."
>
  Download Cover Letter
</a>
```

#### Step 3: Remove Alert
Delete the `onClick` handler that shows the alert:

```typescript
// Remove this:
onClick={(e) => {
  e.preventDefault();
  alert('...');
}}
```

---

### 4. Skills Section

**File:** `/src/components/Skills.tsx`

#### Update Technical Skills:

```typescript
const technicalSkills = [
  { name: 'HTML', level: 90 },        // Update skill name and proficiency
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  // Add your skills with honest proficiency levels (0-100)
];
```

#### Update Professional Skills:

```typescript
const professionalSkills = [
  'Communication',
  'Leadership',
  // Add your professional strengths
];
```

---

### 5. About Section

**File:** `/src/components/About.tsx`

#### Update Bio:
Replace the text in the prose section with your own story:

```typescript
<p>
  <strong>Your Name</strong> is a [your description]...
</p>
```

#### Update Highlights:
The cards at the bottom show key highlights. Update these:

```typescript
{
  icon: GraduationCap,
  title: 'Your Highlight Title',
  description: 'Description of what makes you unique'
}
```

---

### 6. Education & Experience

**File:** `/src/components/Experience.tsx`

#### Update Education:

```typescript
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    period: 'In Progress' or '2020-2024',
    status: 'Completed' or 'In Progress'
  },
  // Add more education entries
];
```

#### Update Experience:

```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 – Present',
    location: 'City, Country or Remote',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
    ],
    technologies: ['Skill 1', 'Skill 2'],
    current: true // or false
  },
];
```

---

### 7. Contact Form

**File:** `/src/components/Contact.tsx`

The contact form currently uses `mailto:`. To use a proper form service:

#### Option A: Formspree (Easy, Free tier available)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form submission:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    alert('Message sent successfully!');
    // Reset form
  }
};
```

#### Option B: EmailJS (Alternative)

Similar setup at [emailjs.com](https://www.emailjs.com)

---

### 8. Colors & Styling

The site uses a professional color scheme. To customize:

**File:** `/src/index.css` and component files

Current colors:
- Primary: `#0d1b2a` (Deep blue)
- Secondary: `#1b4965` (Medium blue)
- Accent: `#e0e1dd` (Soft gray)
- Teal: For highlights

To change, find and replace these hex codes throughout the components.

---

### 9. SEO & Meta Tags

**File:** `/index.html`

Update the meta tags:

```html
<title>Your Name Portfolio | Your Title</title>
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Keywords, Here">
```

Add your own favicon:
1. Generate favicon at [favicon.io](https://favicon.io)
2. Place in `/public` folder
3. Update link in `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## Testing Your Changes

After making changes:

1. **Development Server**
   ```bash
   npm run dev
   ```
   Check at `http://localhost:5173`

2. **Build Test**
   ```bash
   npm run build
   ```
   Ensure no errors

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## Common Issues

### Links Not Working
- Ensure URLs start with `https://`
- Check for typos in social media links

### Images Not Showing
- Place images in `/public` folder
- Use absolute paths: `/image.png`
- Check file names (case-sensitive)

### Resume Download Not Working
- Verify PDF files are in `/public` folder
- Check file names match href attribute
- Remove alert onClick handlers

### Form Not Submitting
- Set up Formspree or EmailJS
- Update handleSubmit function
- Test with valid email

---

## Need More Help?

- Check `README.md` for general information
- See `DEPLOYMENT.md` for hosting instructions
- Review component files - they have clear structure
- All components are in `/src/components/`

---

Happy customizing! Make this portfolio truly yours. 🎨

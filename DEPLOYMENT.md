# Deployment Guide

This guide explains how to deploy your portfolio website to various hosting platforms.

## Quick Start

Before deploying, make sure your site builds successfully:

```bash
npm run build
```

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest option and offers excellent performance with automatic HTTPS.

### Steps:

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `https://your-project.vercel.app`
   - Every push to main branch auto-deploys

### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

## Option 2: Netlify

Netlify offers similar features to Vercel with a drag-and-drop option.

### Method A: Drag & Drop (Easiest)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com](https://app.netlify.com)

3. Drag the `dist` folder to the deploy area

4. Done! Your site is live.

### Method B: Git Integration

1. Push your code to GitHub (same as Vercel step 1)

2. On Netlify:
   - Click "New site from Git"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method C: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

## Option 3: GitHub Pages

GitHub Pages is free but requires a few extra steps.

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   Add these lines to your `package.json`:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

   Replace:
   - `YOUR_USERNAME` with your GitHub username
   - `YOUR_REPO_NAME` with your repository name

3. **Update vite.config.ts**

   Add the base path:
   ```typescript
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/root`
   - Save

6. **Access your site**
   - Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Option 4: Custom Server (VPS/Cloud)

If you have your own server or VPS:

### Build and Deploy:

```bash
# Build
npm run build

# Upload the dist folder to your server
scp -r dist/* user@your-server.com:/var/www/html/

# Or use rsync
rsync -avz dist/ user@your-server.com:/var/www/html/
```

### Nginx Configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Post-Deployment Checklist

After deploying, verify:

- ✅ All pages load correctly
- ✅ Smooth scrolling works
- ✅ Contact form opens email client
- ✅ Resume download buttons work (after adding PDFs)
- ✅ All images load
- ✅ Mobile responsive design works
- ✅ Social links open correctly
- ✅ Navigation works on all sections

---

## Updating Your Site

### Vercel/Netlify (Git Integration)
Just push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Auto-deploys in ~1 minute.

### GitHub Pages
```bash
npm run deploy
```

### Manual Deployments
1. `npm run build`
2. Upload new `dist` folder

---

## Troubleshooting

### Site Not Loading
- Check build was successful: `npm run build`
- Verify `dist` folder contains `index.html`
- Check browser console for errors

### 404 on Page Refresh
- For Netlify: Add `_redirects` file in `/public`:
  ```
  /*    /index.html   200
  ```
- For Vercel: Auto-handled
- For GitHub Pages: This is normal for SPAs

### Images Not Loading
- Make sure images are in `/public` folder
- Use absolute paths: `/image.png`
- Check case sensitivity in filenames

### Custom Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check SSL certificate status

---

## Performance Tips

After deployment:

1. **Test Performance**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

2. **Optimize Images**
   - Convert to WebP format
   - Compress large images
   - Use appropriate sizes

3. **Enable Caching**
   - Most platforms do this automatically
   - Vercel/Netlify: Built-in CDN

4. **Monitor Uptime**
   - Use [UptimeRobot](https://uptimerobot.com/) (free)

---

## Need Help?

- **Vercel**: [Documentation](https://vercel.com/docs)
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **GitHub Pages**: [Documentation](https://docs.github.com/en/pages)

---

Good luck with your deployment! 🚀

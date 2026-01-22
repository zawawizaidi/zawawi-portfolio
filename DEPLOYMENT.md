# Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest for Next.js)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (https://github.com/new)
   - Name it: `zawawi-portfolio` (or any name you prefer)
   - Make it **Public** or **Private** (your choice)
   - **Don't** initialize with README, .gitignore, or license

2. Connect your local repository to GitHub:
```powershell
cd C:\Users\mozaq\zawawi-portfolio
git remote add origin https://github.com/YOUR_USERNAME/zawawi-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your `zawawi-portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes at: `https://zawawi-portfolio.vercel.app`

**Vercel Benefits:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Auto-deploys on every git push
- ✅ Perfect for Next.js

---

## Option 2: Deploy to Netlify

1. Push to GitHub (same as Step 1 above)
2. Go to https://netlify.com
3. Sign up/Login with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

---

## Option 3: Deploy to GitHub Pages (Requires Static Export)

If you prefer GitHub Pages, we need to configure Next.js for static export:

1. Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
}
```

2. Update `package.json`:
```json
"scripts": {
  "build": "next build",
  "export": "next build"
}
```

3. Push to GitHub and enable GitHub Pages in repository settings.

---

## Quick Deploy Commands

After setting up GitHub remote:

```powershell
# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update portfolio"
git push
```

---

## Recommended: Vercel

Vercel is the best choice because:
- Made by the creators of Next.js
- Zero configuration needed
- Automatic deployments
- Free tier is generous
- Fast global CDN

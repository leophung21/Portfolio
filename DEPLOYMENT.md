# How to Host Your Portfolio Website

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `portfolio` (or `yourname.github.io` for a custom domain later)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Your Files
**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your files (index.html, styles.css, script.js, images folder, etc.)
3. Click "Commit changes"

**Option B: Using Git (Command Line)**
```bash
cd /Users/leo/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

**Note:** It may take a few minutes for the site to be available.

---

## Option 2: Netlify (Free - Drag & Drop)

### Method 1: Drag & Drop (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your entire `portfolio` folder onto the page
3. Your site is instantly live! You'll get a URL like `random-name-123.netlify.app`
4. You can customize the site name in settings

### Method 2: Connect GitHub
1. Sign up at [Netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your portfolio repository
5. Deploy! Netlify auto-deploys on every push

**Benefits:**
- Free custom domain support
- Automatic HTTPS
- Continuous deployment from GitHub

---

## Option 3: Vercel (Free - Great Performance)

1. Sign up at [Vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository (or drag & drop)
4. Click "Deploy"
5. Your site is live at `your-project.vercel.app`

**Benefits:**
- Super fast CDN
- Automatic HTTPS
- Custom domain support

---

## Option 4: Cloudflare Pages (Free - Fast CDN)

1. Sign up at [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select your portfolio repository
4. Build settings: Framework preset = "None"
5. Deploy!

---

## Quick Comparison

| Platform | Ease | Speed | Custom Domain | Best For |
|----------|------|-------|---------------|----------|
| **GitHub Pages** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Free | Beginners |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Free | Easy deployment |
| **Vercel** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Free | Performance |
| **Cloudflare** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Free | Global CDN |

---

## Custom Domain (Optional)

All platforms above support custom domains for free:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In your hosting platform settings, add your custom domain
3. Update DNS records as instructed
4. Your portfolio will be at `yourname.com`!

---

## Need Help?

- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**Recommended:** Start with **GitHub Pages** - it's the easiest and most common choice for portfolios!


# Setting Up a Custom Domain (leophung.com)

## Step 1: Buy a Domain Name

### Recommended Domain Registrars:
1. **Namecheap** - [namecheap.com](https://www.namecheap.com) - ~$10-15/year
2. **Google Domains** - [domains.google.com](https://domains.google.com) - ~$12/year
3. **Cloudflare Registrar** - [cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar) - ~$8-10/year (cheapest!)
4. **GoDaddy** - [godaddy.com](https://www.godaddy.com) - ~$12-15/year

**Search for:** `leophung.com` (or `.net`, `.io` if `.com` is taken)

---

## Step 2: Deploy Your Site First

Choose one hosting platform and deploy your site first (you'll get a temporary URL like `yourname.github.io` or `yourname.netlify.app`). Then we'll connect your custom domain.

---

## Step 3: Connect Custom Domain

### Option A: GitHub Pages + Custom Domain

1. **Deploy to GitHub Pages** (get your site working first)
2. **In your GitHub repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `leophung.com`
   - Check "Enforce HTTPS"
   - Click Save

3. **In your domain registrar (e.g., Namecheap):**
   - Go to Domain List → Manage → Advanced DNS
   - Add these DNS records:
   
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.109.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.110.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.111.153
   TTL: Automatic
   
   Type: CNAME Record
   Host: www
   Value: YOUR_USERNAME.github.io
   TTL: Automatic
   ```

4. **Wait 24-48 hours** for DNS to propagate
5. Your site will be live at `leophung.com` and `www.leophung.com`!

---

### Option B: Netlify + Custom Domain (Easiest!)

1. **Deploy to Netlify** (drag & drop or connect GitHub)
2. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `leophung.com`
   - Click "Verify"

3. **Configure DNS:**
   - Netlify will show you the DNS records to add
   - Usually just add a CNAME record:
   
   ```
   Type: CNAME
   Host: @ (or leophung.com)
   Value: YOUR_SITE.netlify.app
   TTL: Automatic
   ```
   
   OR use Netlify's nameservers (easier):
   - In your domain registrar, change nameservers to:
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
     - `dns3.p01.nsone.net`
     - `dns4.p01.nsone.net`

4. **Wait a few hours** - Netlify handles SSL automatically!

---

### Option C: Vercel + Custom Domain

1. **Deploy to Vercel**
2. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add: `leophung.com`
   - Vercel will show DNS instructions

3. **Add DNS records** as shown in Vercel dashboard
4. **SSL is automatic!**

---

### Option D: Cloudflare Pages + Custom Domain

1. **Deploy to Cloudflare Pages**
2. **In Cloudflare Dashboard:**
   - Go to Pages → Your site → Custom domains
   - Add: `leophung.com`
   - If your domain is already on Cloudflare, it auto-configures!
   - If not, follow DNS instructions

---

## Quick Setup Guide (Recommended: Netlify)

### Fastest Path to leophung.com:

1. **Buy domain** at Cloudflare Registrar (~$8/year) or Namecheap
2. **Deploy site** to Netlify (drag & drop your folder)
3. **Add domain** in Netlify dashboard
4. **Update DNS** in your registrar (Netlify gives you exact instructions)
5. **Wait 1-24 hours** for DNS propagation
6. **Done!** Your site is at `leophung.com` with free SSL!

---

## DNS Propagation Time

- **Usually:** 1-4 hours
- **Maximum:** 24-48 hours
- **Check status:** Use [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated

---

## SSL/HTTPS Certificate

All platforms above provide **free SSL certificates** automatically:
- GitHub Pages: Automatic (may take a few hours)
- Netlify: Automatic (instant)
- Vercel: Automatic (instant)
- Cloudflare: Automatic (instant)

Your site will be at `https://leophung.com` (secure!)

---

## Cost Breakdown

- **Domain:** ~$8-15/year
- **Hosting:** FREE (all platforms above)
- **SSL Certificate:** FREE (included)
- **Total:** ~$8-15/year

---

## Need Help?

- **GitHub Pages DNS:** [docs.github.com/pages/configuring-a-custom-domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
- **Netlify DNS:** [docs.netlify.com/domains-https](https://docs.netlify.com/domains-https/custom-domains/)
- **Vercel DNS:** [vercel.com/docs/concepts/projects/domains](https://vercel.com/docs/concepts/projects/domains)

---

**Pro Tip:** Use **Netlify** + **Cloudflare Registrar** for the easiest and cheapest setup!


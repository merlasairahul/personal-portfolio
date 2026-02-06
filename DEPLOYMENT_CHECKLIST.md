# 🚀 Deployment Checklist

Before deploying your portfolio, update these placeholder values with your actual information.

---

## 📋 FILES TO UPDATE

### 1. `index.html` - SEO & Meta Tags

| Line | Current Value | Update To |
|------|--------------|-----------|
| 8 | `Frontend Developer \| React & UI Specialist` | Your custom title |
| 16 | `https://yourportfolio.com/` | Your actual domain |
| 20-23 | `https://yourportfolio.com/` | Your actual domain |
| 22 | `https://yourportfolio.com/og-image.png` | Your OG image URL |
| 27-31 | Twitter URLs | Your actual domain |
| 32 | `@yourhandle` | Your Twitter handle |
| 58-67 | JSON-LD structured data | Your name, URL, social profiles |

**JSON-LD Updates (lines 58-67):**
```json
{
  "name": "Your Full Name",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://github.com/YOUR_GITHUB",
    "https://linkedin.com/in/YOUR_LINKEDIN",
    "https://twitter.com/YOUR_TWITTER"
  ]
}
```

---

### 2. `src/components/Contact.jsx` - Contact Information

| Variable | Current Value | Update To |
|----------|--------------|-----------|
| `email` (line 11) | `sairahulmerladev@gmail.com` | ✅ Already set |
| `whatsappNumber` (line 12) | `919032994226` | ✅ Already set |
| LinkedIn href (line 24) | `linkedin.com/in/yourprofile` | Your LinkedIn URL |
| GitHub href (line 30) | `github.com/yourprofile` | Your GitHub URL |


---

### 3. `src/components/Footer.jsx` - Footer Info

| Line | Current Value | Update To |
|------|--------------|-----------|
| Copyright text | `Your Name` | Your actual name |
| GitHub link | `github.com` | Your GitHub profile |
| LinkedIn link | `linkedin.com` | Your LinkedIn profile |
| Twitter link | `twitter.com` | Your Twitter profile |

---

### 4. `src/components/Navbar.jsx` - Branding

| Line | Current Value | Update To |
|------|--------------|-----------|
| Logo text | `Dev.` | Your brand/name |

---

### 5. `src/components/Hero.jsx` - Hero Content

Update the hero text content to match your personal brand:
- Main headline
- Description paragraph
- Services list (if needed)

---

### 6. `src/components/Projects.jsx` - Portfolio Work

Replace placeholder projects with your actual work:

```jsx
const projects = [
    {
        title: "Your Project Name",
        description: "What the project does and your role",
        tags: ["React", "Tailwind", "etc"],
        links: { 
            demo: "https://live-site.com", 
            code: "https://github.com/you/repo" 
        }
    },
    // Add more projects...
];
```

---

### 7. `public/sitemap.xml` - URLs

Replace all `https://yourportfolio.com/` with your actual domain.

---

### 8. `public/robots.txt` - Sitemap URL

Replace `https://yourportfolio.com/sitemap.xml` with your actual URL.

---

## 🖼️ ASSETS TO CREATE/ADD

| Asset | Location | Purpose |
|-------|----------|---------|
| OG Image | `/public/og-image.png` | Social media preview (1200×630px) |
| Favicon PNG 32×32 | `/public/favicon-32x32.png` | Browser tab icon |
| Favicon PNG 16×16 | `/public/favicon-16x16.png` | Browser tab icon |
| Apple Touch Icon | `/public/apple-touch-icon.png` | iOS home screen (180×180px) |

**Note:** The SVG favicon (`/public/favicon.svg`) is already created, but add PNG versions for full browser support.

---

## 🌐 DEPLOYMENT OPTIONS

### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (auto-detects Vite)

### Option B: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option C: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## ✅ PRE-DEPLOY CHECKLIST

- [ ] Updated all placeholder URLs to real domain
- [ ] Updated name/branding throughout
- [ ] Updated email and WhatsApp number
- [ ] Updated social media links
- [ ] Added real project information
- [ ] Created OG image for social sharing
- [ ] Tested on mobile devices
- [ ] Tested dark mode appearance
- [ ] Verified all links work
- [ ] Run `npm run build` to check for errors

---

## 🔍 POST-DEPLOY CHECKLIST

- [ ] Test live site on multiple devices
- [ ] Check Google PageSpeed Insights score
- [ ] Submit sitemap to Google Search Console
- [ ] Test social sharing preview (use [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Verify WhatsApp and email links work
- [ ] Set up analytics (optional)

---

## 📞 YOUR CONTACT INFO (For Reference)

- **Email:** sairahulmerladev@gmail.com
- **WhatsApp:** +91 9032994226
- **WhatsApp Link:** https://wa.me/919032994226

---

Good luck with your deployment! 🎉

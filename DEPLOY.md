# MindEase – Deployment Guide
**Founded by Abdul Ghani**

---

## Project Structure

```
mindease/
├── index.html              ← Home page
├── about.html              ← About Us
├── contact.html            ← Contact
├── faq.html                ← FAQ (with FAQ Schema)
├── privacy.html            ← Privacy Policy
├── terms.html              ← Terms of Service
├── disclaimer.html         ← Medical Disclaimer
├── sitemap.xml             ← XML Sitemap for Google
├── robots.txt              ← Search engine instructions
├── vercel.json             ← Vercel config + cache headers
├── css/
│   └── style.css           ← All styles (light + dark mode)
├── js/
│   └── main.js             ← Search, FAQ, theme, share, newsletter
├── images/
│   └── favicon.svg         ← Site favicon
└── blog/
    ├── index.html          ← Blog homepage with search
    ├── anxiety-disorder.html
    ├── depression-symptoms.html
    ├── stress-management.html
    ├── panic-attack-vs-anxiety-attack.html
    ├── cbt-techniques-anxiety.html
    ├── improve-sleep-quality.html
    ├── signs-of-burnout.html
    ├── social-anxiety-symptoms.html
    ├── mindfulness-for-beginners.html
    └── when-to-see-a-therapist.html
```

---

## Deploy to Vercel (Recommended — Free)

### Option A: Drag & Drop (Fastest)
1. Go to https://vercel.com and sign in (or create a free account)
2. Click **"Add New Project"** → **"Deploy"**
3. Drag the entire `mindease` folder onto the upload area
4. Vercel auto-detects it as a static site
5. Click **Deploy** — your site is live in ~30 seconds
6. Copy your Vercel URL (e.g. mindease.vercel.app)

### Option B: Via GitHub (Recommended for updates)
1. Create a GitHub account at https://github.com
2. Create a new repository named `mindease`
3. Upload all files from this folder to the repo
4. Go to https://vercel.com → **"Add New Project"**
5. Connect your GitHub account → select the `mindease` repo
6. Click **Deploy**
7. Every future push to GitHub auto-deploys to Vercel

### Connect a Custom Domain on Vercel
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. mindease.app)
3. Update your domain's DNS with the records Vercel shows you
4. SSL/HTTPS is automatic and free

---

## Deploy to GitHub Pages (Free Alternative)

1. Push all files to a GitHub repo named `your-username.github.io`
   OR to any repo, then enable Pages under Settings → Pages
2. Set Source to `main` branch / `root`
3. Your site is live at `https://your-username.github.io`

---

## After Deployment — SEO Checklist

### 1. Update your domain in these files:
Search for `www.mindease.app` in:
- `sitemap.xml` — replace all instances with your actual domain
- All `<link rel="canonical">` tags in every HTML file
- All `og:url` and `og:image` meta tags

### 2. Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property (domain)
3. Verify ownership (Vercel allows HTML file or DNS verification)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for your homepage

### 3. Submit to Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site and submit sitemap

### 4. Set up Google Analytics (Optional)
1. Create account at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add this before `</head>` in every HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. Add OG Image
Create a 1200×630px image named `og.png` and place it in `/images/`
Tools: Canva (free), Figma, or Adobe Express

---

## SEO Features Already Implemented

✅ Unique title tags on every page  
✅ Meta descriptions on every page  
✅ Canonical URLs on every page  
✅ Open Graph tags (Facebook/LinkedIn)  
✅ Twitter Card tags  
✅ Organization Schema (JSON-LD)  
✅ WebSite Schema with SearchAction  
✅ FAQ Schema on FAQ page  
✅ Article Schema on blog posts  
✅ Breadcrumb navigation on all pages  
✅ sitemap.xml with all pages  
✅ robots.txt  
✅ SVG Favicon  
✅ Mobile responsive design  
✅ Dark mode toggle (saved to localStorage)  
✅ Reading progress bar  
✅ Blog search functionality  
✅ Share buttons (Twitter, Facebook, WhatsApp, Copy)  
✅ Newsletter subscription form  
✅ Related articles section  
✅ Medical disclaimers on all pages  
✅ No fake statistics or fabricated testimonials  
✅ EEAT-compliant content  
✅ YMYL medical content guidelines followed  
✅ Crisis resources on multiple pages  
✅ Accessibility: skip links, ARIA labels, semantic HTML  
✅ Security headers via vercel.json  
✅ Cache headers for CSS/JS/images  

---

## Content Updates

To add new blog articles:
1. Copy any existing blog HTML file as a template
2. Update: title, meta description, canonical URL, h1, content
3. Add the new article to `blog/index.html` grid
4. Add URL to `sitemap.xml`
5. Add internal links from related articles
6. Deploy

---

## Founder
Built and designed by **Abdul Ghani**

# 🚀 RaleeyGo Website Deployment Guide

## Deployment Options

### 1️⃣ Vercel (Easiest - Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"
7. Done! 🎉

**Custom Domain:**
1. In Vercel dashboard, go to Settings > Domains
2. Add your domain (e.g., raleeygo.com)
3. Update DNS records as instructed
4. SSL is automatic

---

### 2️⃣ Netlify (Also Very Easy)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder
4. Done!

**Option B: Git Integration**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

**Custom Domain:**
1. In Netlify dashboard, go to Domain settings
2. Add custom domain
3. Follow DNS instructions
4. SSL is automatic

---

### 3️⃣ GitHub Pages (Free)

**Steps:**
1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repo Settings > Pages
   - Source: gh-pages branch
   - Save

6. Site will be at: `https://yourusername.github.io/repo-name`

---

### 4️⃣ AWS S3 + CloudFront

**Setup:**
1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Create CloudFront distribution
5. Point to S3 bucket
6. Configure custom domain
7. Add SSL certificate (ACM)

**Deploy Script:**
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 5️⃣ DigitalOcean App Platform

**Steps:**
1. Push code to GitHub
2. Go to DigitalOcean > Apps
3. Create new app
4. Connect GitHub repo
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

---

### 6️⃣ Firebase Hosting

**Setup:**
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```

2. Initialize:
```bash
firebase init hosting
```

3. Configure:
   - Public directory: `dist`
   - Single-page app: Yes
   - Auto builds: No

4. Deploy:
```bash
npm run build
firebase deploy
```

---

### 7️⃣ Heroku

**Steps:**
1. Create `static.json`:
```json
{
  "root": "dist",
  "routes": {
    "/**": "index.html"
  }
}
```

2. Add to `package.json`:
```json
"scripts": {
  "heroku-postbuild": "npm run build"
}
```

3. Deploy:
```bash
heroku create raleeygo
git push heroku main
```

---

### 8️⃣ Traditional Server (Nginx/Apache)

**Build:**
```bash
npm run build
```

**Upload `dist/` folder to server via:**
- FTP/SFTP
- SCP: `scp -r dist/* user@server:/var/www/html/`
- Git pull on server

**Nginx Config:**
```nginx
server {
    listen 80;
    server_name raleeygo.com www.raleeygo.com;
    root /var/www/raleeygo/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache Config (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**SSL (Let's Encrypt):**
```bash
sudo certbot --nginx -d raleeygo.com -d www.raleeygo.com
```

---

## Environment-Specific Configurations

### Production Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.raleeygo.com
VITE_APP_ENV=production
```

### Staging Environment

Create `.env.staging`:
```env
VITE_API_URL=https://staging-api.raleeygo.com
VITE_APP_ENV=staging
```

---

## CI/CD Automation

### GitHub Actions (Auto Deploy to Vercel)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Post-Deployment Checklist

- [ ] **DNS Configuration**
  - [ ] A record points to server IP
  - [ ] CNAME for www subdomain
  - [ ] SSL certificate installed

- [ ] **Performance**
  - [ ] Run Lighthouse audit (aim for 90+)
  - [ ] Enable gzip compression
  - [ ] Configure caching headers
  - [ ] Optimize images

- [ ] **SEO**
  - [ ] Submit sitemap to Google Search Console
  - [ ] Add Google Analytics
  - [ ] Verify meta tags
  - [ ] Test social media sharing

- [ ] **Functionality**
  - [ ] Test all links
  - [ ] Verify contact form works
  - [ ] Check mobile responsiveness
  - [ ] Test in multiple browsers

- [ ] **Security**
  - [ ] Force HTTPS redirect
  - [ ] Add security headers
  - [ ] Configure CORS if needed

- [ ] **Monitoring**
  - [ ] Set up uptime monitoring (UptimeRobot)
  - [ ] Configure error tracking (Sentry)
  - [ ] Add analytics

---

## Domain Configuration

### DNS Records

```
Type    Name    Value                   TTL
A       @       YOUR_SERVER_IP          3600
CNAME   www     raleeygo.com            3600
```

### For Vercel/Netlify

They provide nameservers. Update at your domain registrar:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

## SSL/HTTPS

### Free SSL Options:
1. **Let's Encrypt** - Free, auto-renewing
2. **Cloudflare** - Free with CDN
3. **Platform SSL** - Vercel/Netlify provide free SSL

---

## Cost Comparison

| Platform | Cost | Bandwidth | SSL | CDN |
|----------|------|-----------|-----|-----|
| Vercel | Free for hobby | 100GB/mo | ✅ | ✅ |
| Netlify | Free for personal | 100GB/mo | ✅ | ✅ |
| GitHub Pages | Free | 100GB/mo | ✅ | ❌ |
| DigitalOcean | $5/mo | 1TB/mo | ✅ | ❌ |
| AWS S3+CF | ~$1-5/mo | Pay as you go | ✅ | ✅ |
| Traditional VPS | $5-20/mo | Varies | ✅ | ❌ |

---

## Recommended: Vercel

**Why?**
- ✅ Zero configuration
- ✅ Automatic deployments from Git
- ✅ Free SSL
- ✅ Global CDN
- ✅ Automatic preview deployments
- ✅ Built-in analytics
- ✅ Edge functions support
- ✅ Perfect for React/Vite

---

## Quick Deploy Commands

```bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy --prod

# Firebase
npm i -g firebase-tools
firebase deploy

# GitHub Pages
npm run deploy

# Manual (any server)
npm run build
# Upload dist/ folder
```

---

## Need Help?

**Common Issues:**

1. **404 on page refresh**
   - Configure server to serve index.html for all routes
   - Check base URL in vite.config.js

2. **Assets not loading**
   - Use absolute paths (/image.png)
   - Check base configuration

3. **Build fails**
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Check for console errors

**Support:**
- Email: support@raleeygo.com
- Documentation: [Setup Guide](./SETUP_GUIDE.md)

---

**Recommended Deployment:** Vercel (Easiest)  
**Alternative:** Netlify (Also easy)  
**Budget Option:** GitHub Pages (Free)

Choose the option that best fits your needs! 🚀

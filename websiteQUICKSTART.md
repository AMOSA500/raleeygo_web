# 🎯 QUICK START - RaleeyGo Website

## ⚡ Get Started in 3 Commands

```bash
cd /repo/website
npm install
npm run dev
```

Open http://localhost:3000 in your browser!

---

## 📝 Available Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # Lint code

# Quick setup script
chmod +x start.sh
./start.sh          # Automated setup + start
```

---

## 🎨 What You'll See

When you run `npm run dev`, you'll see:

```
VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Then open http://localhost:3000 to view your website!

---

## 📂 Project Structure

```
website/
├── src/
│   ├── pages/         → All page components
│   ├── components/    → Reusable components
│   ├── App.jsx        → Main app + routing
│   └── main.jsx       → Entry point
├── public/            → Static files (images, etc.)
├── package.json       → Dependencies
└── vite.config.js     → Build configuration
```

---

## 🎨 Customization Quick Links

### 1. Update Colors
File: `tailwind.config.js`
Line: 9-16

### 2. Update Logo
File: `public/logo.svg`

### 3. Update Contact Info
File: `src/pages/Contact.jsx`
Line: 55-58

### 4. Update App Store Links
File: `src/pages/Download.jsx`
Line: 54 (iOS) & 76 (Android)

### 5. Update Company Info
File: `src/components/Footer.jsx`
Line: 21-25

---

## 🚀 Deploy Checklist

Before deploying:

- [ ] Replace logo in `public/logo.svg`
- [ ] Add phone mockup image
- [ ] Update contact information
- [ ] Test contact form
- [ ] Update App Store links
- [ ] Test on mobile devices
- [ ] Run `npm run build`
- [ ] Test production build with `npm run preview`

---

## 📚 Documentation

- **README.md** - Basic overview
- **SETUP_GUIDE.md** - Detailed setup instructions (⭐ START HERE)
- **DEPLOYMENT.md** - Deployment options
- **PROJECT_SUMMARY.md** - Complete project overview

---

## ❓ Common Questions

**Q: Where do I add images?**  
A: Place them in `public/` folder, reference as `/image.png`

**Q: How do I add a new page?**  
A: Create in `src/pages/`, add route in `src/App.jsx`

**Q: How do I change colors?**  
A: Edit `tailwind.config.js` under `theme.extend.colors`

**Q: Where's the contact form API?**  
A: Update `handleSubmit` in `src/pages/Contact.jsx`

**Q: How do I deploy?**  
A: See DEPLOYMENT.md - Recommended: Vercel (easiest)

---

## 🎉 You're All Set!

Your complete React website includes:
- ✅ 8 pages (Home, Features, Download, etc.)
- ✅ Responsive design
- ✅ Contact form
- ✅ SEO optimized
- ✅ Production ready

**Next step:** Run `npm install` and `npm run dev`

---

**Need help?** Check SETUP_GUIDE.md or contact support@raleeygo.com

🚀 Happy coding!

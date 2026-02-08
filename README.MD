# 💖 Be My Valentine

A playful, interactive Valentine’s Day webpage designed to surprise users with humor, persistence, and a bit of chaos.

Built as a static site and deployed via GitHub Pages.

---

## 💖 Live Valentine Page  
Live demo: https://one-repo-to-rule-them-all.github.io/BeMyValentine/

---

## ✨ Features

- Animated "No" button that avoids interaction
- Escalating reactions after repeated attempts
- Hidden chaos mode 💥
- Background music on acceptance
- Google Analytics anonymous event tracking
- Fully static (no backend)

---

## 📊 Analytics

This project uses **Google Analytics (GA4)** to track:

- Yes button clicks
- No button attempts
- Device type (mobile vs desktop)
- Country

Analytics logic is isolated in `analytics.js` for maintainability.

> ⚠️ No personally identifiable information (PII) is collected.

---


## How to Run Locally
1. Clone the repo:
```bash
git clone https://github.com/one-repo-to-rule-them-all/BeMyValentine.git
cd BeMyValentine
```
2. Navigate to index.html and open with your favorite browser
3. Make a simple style change such as kitten image size or h1 font size
4. Reload index.html page to see changes


## 🚀 Deployment (GitHub Pages)

1. Push project to a GitHub repository
2. Go to **Settings → Pages**
3. Set:
   - Source: `main`
   - Folder: `/root`
4. Save and wait ~1 minute
5. Your site will be live 🎉
6. [https://your-username.github.io/your-repo-name/](https://your-username.github.io/your-repo-name/)

---

## 🛠 Project Structure
/ (root)
│
├── index.html
├── styles.css
├── analytics.js
├── app.js
├── README.MD   
└── media
    ├── Rick_Astley_Never_Gonna_Give_You_Up.mp3
    ├── gunCat.gif

---

## ⚠️ Privacy & Security

- No backend
- No cookies manually set
- No personal data collected
- Safe for public hosting
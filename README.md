# Himanshu Maurya Website – React

A responsive and dynamic portfolio website built using **React** and **Vite**, styled with **Tailwind CSS**, and deployed via **Firebase Hosting**.

## 🌐 Live Site

👉 [https://himanshumaurya-0007.web.app](https://himanshumaurya-0007.web.app)

---

## 📁 Project Structure

```
frontend/
├── node_modules/                   # Project dependencies
├── public/                         # Static public assets
│   ├── favicon/                    # Favicon assets
│   ├── profile.jpeg
│   ├── robots.txt
│   └── sitemap.xml
├── src/                            # Source code
│   ├── assets/                     # Local assets (e.g., images)
│   │   └── profile.jpeg
│   ├── components/                 # Reusable UI components
│   │   ├── Home/
│   │   │   ├── ImageCarousel.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ImageCarousel.jsx
│   │   ├── Loader.jsx
│   │   └── ProjectCard.jsx
│   ├── data/                         # Static data
│   │   └── ProjectData.js
│   ├── pages/                        # Page-level components
│   │   ├── AboutMe.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Portfolio.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

```

---

## 🚀 Deployment (Firebase Hosting)

### ✅ Prerequisites

Ensure the following are installed:
- Node.js and npm
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase account and a created project

---

### 🛠️ Deployment Steps

```bash
# Step 1: Install Firebase CLI
npm install -g firebase-tools

# Step 2: Login to Firebase
firebase login

# Step 3: Initialize Firebase Project
firebase init
# Choose: Hosting
# Use existing project: himanshumaurya-0007
# Public directory: dist
# Configure as SPA: Yes
# Set up GitHub deploys: No

# Step 4: Build the project for production
npm run build

# Step 5: Deploy to Firebase Hosting
firebase deploy
```

## 🛠️ Tech Stack

- Frontend: React (Vite)

- Styling: Tailwind CSS

- Routing: React Router

- Deployment: Firebase Hosting


## 🔗 Firebase Hosting Details

- Project Console: Firebase Console

- Live URL: https://himanshumaurya-0007.web.app

## 📄 License
This project is licensed under the [MIT License](). Feel free to modify and use as needed.

## 👤 Author
Himanshu Maurya<br>
Full-Stack MERN Developer<br>
📧 himanshumaurya7781@gmail.com<br>
🔗 [LinkedIn](https://www.linkedin.com/in/himanshumaurya0007)

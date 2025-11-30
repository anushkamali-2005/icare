# Deploy ICARE Frontend to Render

## 🚀 Quick Deployment Guide

Since you're familiar with Render, here's the exact configuration for your Next.js frontend:

---

## Step 1: Push to GitHub (if not already)

```powershell
cd C:\Users\aksha\.gemini\antigravity\scratch\icare-platform
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## Step 2: Create New Web Service on Render

1. Go to https://render.com/dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: **icare-platform**

---

## Step 3: Configure Build Settings

### **Basic Settings:**
- **Name**: `icare-frontend` (or any name you prefer)
- **Region**: Singapore (closest to India)
- **Branch**: `main`
- **Root Directory**: `frontend`

### **Build & Deploy:**
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### **Environment Variables:**
Click "Advanced" and add:
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
```
(You can update the API URL later when you deploy the backend)

### **Plan:**
- Select **"Free"** tier

---

## Step 4: Deploy!

Click **"Create Web Service"**

Render will:
1. Clone your repo
2. Install dependencies
3. Build your Next.js app
4. Deploy it

**Deployment time:** 5-10 minutes

---

## Step 5: Get Your Live URL

Once deployed, you'll get a URL like:
```
https://icare-frontend.onrender.com
```

---

## ⚠️ Important Notes for Render Free Tier:

1. **Cold Starts**: Free tier spins down after 15 minutes of inactivity
   - First visit after inactivity takes 30-60 seconds to wake up
   - Subsequent visits are instant

2. **Build Time**: Initial build takes 5-10 minutes

3. **Bandwidth**: 100GB/month (plenty for demo/testing)

---

## 🎯 What You'll Have After Deployment:

✅ Live website at `https://your-app.onrender.com`  
✅ HTTPS (secure)  
✅ Auto-deploy on every Git push  
✅ All 16 pages working  
✅ All 8 pillars accessible  

---

## 🔧 Optional: Custom Domain

After deployment, you can add a custom domain:
1. Go to your service settings
2. Click "Custom Domain"
3. Add your domain (e.g., `icare.yourdomain.com`)
4. Update DNS records as instructed

---

## 📋 Deployment Checklist:

- [ ] Code pushed to GitHub
- [ ] New Web Service created on Render
- [ ] Root directory set to `frontend`
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm start`
- [ ] Free tier selected
- [ ] Deployment initiated
- [ ] Wait 5-10 minutes
- [ ] Test live URL

---

## 🚀 Ready to Deploy?

Just follow the steps above and your ICARE platform will be live!

**Note:** The frontend works standalone with mock data, so you don't need the backend deployed yet for demo purposes.

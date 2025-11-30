# Deployment Guide: Cursor → GitHub → Vercel → Hostinger

This guide walks you through deploying your portfolio to `rmdnsec.com`.

## Phase 1: Push Code to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
git branch -M main
```

### Step 2: Add and Commit All Files
```bash
git add .
git commit -m "Ready for deploy"
```

### Step 3: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon → **New repository**
3. Name it: `my-portfolio` (or any name you prefer)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

### Step 4: Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your GitHub username)*

## Phase 2: Deploy to Vercel

### Step 1: Sign Up / Log In
1. Go to [Vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account

### Step 2: Import Project
1. Click **Add New Project**
2. Select your `my-portfolio` repository
3. Vercel will auto-detect Next.js settings
4. Click **Deploy**
5. Wait ~1 minute for the build to complete

### Step 3: Get Your Vercel URL
- Your site will be live at: `my-portfolio.vercel.app` (or similar)
- You can test it now to make sure everything works

## Phase 3: Connect Domain (Hostinger → Vercel)

### Step 1: Add Domain in Vercel
1. In Vercel Dashboard, click on your project
2. Go to **Settings** → **Domains** (left sidebar)
3. Type `rmdnsec.com` in the input box
4. Click **Add**
5. Select **Recommended** (Redirect www to root)
6. Click **Add** again
7. You'll see an error with DNS values - **keep this tab open!**
   - **A Record**: `76.76.21.21` (or similar IP)
   - **CNAME**: `cname.vercel-dns.com` (or similar)

### Step 2: Configure DNS in Hostinger
1. Open a new tab and log in to [Hostinger.com](https://hostinger.com)
2. Go to **Websites** or **Domains**
3. Find `rmdnsec.com` and click **Manage**
4. Click **DNS / Name Servers** (left sidebar)

### Step 3: Delete Old Records
- Look for any existing **A** record with name `@` pointing to a Hostinger IP
- **Delete it** if it exists

### Step 4: Add New DNS Records

**Record 1 (Root Domain):**
- **Type**: A
- **Name**: `@`
- **Points to**: `76.76.21.21` (use the IP from Vercel)
- **TTL**: 3600 (or default)
- Click **Add Record**

**Record 2 (WWW Subdomain):**
- **Type**: CNAME
- **Name**: `www`
- **Points to**: `cname.vercel-dns.com` (use the CNAME from Vercel)
- **TTL**: 3600 (or default)
- Click **Add Record**

*(If it says "Record already exists", find the existing `www` CNAME and **Edit** it instead)*

### Step 5: Verify Connection
1. Go back to your Vercel tab
2. **Refresh** the Domains page
3. Wait for verification:
   - ✅ **Blue checkmark** = Success! Your site is live at `rmdnsec.com`
   - ⚠️ **Still error?** DNS propagation can take 15 minutes to 24 hours (usually 15-30 minutes)

## Phase 4: Automatic Updates

From now on, whenever you:
1. Make changes in Cursor
2. Run `git add . && git commit -m "Update" && git push`
3. Vercel automatically rebuilds and deploys
4. Your site at `rmdnsec.com` updates automatically (within 1-2 minutes)

## Troubleshooting

### Build Fails on Vercel
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Make sure `npm run build` works locally

### Domain Not Connecting
- Wait 15-30 minutes for DNS propagation
- Double-check DNS records match exactly what Vercel shows
- Ensure you deleted old A records in Hostinger
- Try clearing your browser cache

### Site Shows "Invalid Configuration"
- This is normal during setup
- Once DNS propagates, it will show a checkmark
- If it persists after 24 hours, re-check DNS records

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Hostinger Support**: Check your Hostinger dashboard
- **GitHub Issues**: If code-related, check Next.js documentation

---

**You're all set!** Your portfolio is now live at `rmdnsec.com` 🚀


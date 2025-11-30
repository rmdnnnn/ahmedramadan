# GitHub Authentication Guide

## Method 1: Personal Access Token (Classic)

### Step-by-Step to Find Developer Settings:

1. **Go to GitHub.com** and log in
2. **Click your profile picture** (top right corner)
3. Click **Settings** (from the dropdown menu)
4. **Scroll down** on the left sidebar until you see:
   - Developer settings
   - (It's near the bottom, below "Security" section)
5. Click **Developer settings**
6. Click **Personal access tokens** → **Tokens (classic)**
7. Click **Generate new token** → **Generate new token (classic)**
8. Give it a name: `Portfolio Deploy`
9. Select expiration (30 days, 90 days, or No expiration)
10. **Check the box**: `repo` (this gives full repository access)
11. Scroll down and click **Generate token**
12. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Using the Token:

```bash
cd /home/rmdn/my-app
git push -f origin main
```

When prompted:
- **Username**: `rmdnnnn`
- **Password**: Paste your token (NOT your GitHub password)

---

## Method 2: SSH (Easier - No Token Needed)

### Quick Setup:

1. **Generate SSH Key:**
   ```bash
   ssh-keygen -t ed25519 -C "rmdnnnn@users.noreply.github.com"
   ```
   - Press Enter to accept default location
   - Press Enter twice for no passphrase (or set one if you prefer)

2. **Copy Your Public Key:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copy the entire output (starts with `ssh-ed25519`)

3. **Add to GitHub:**
   - Go to GitHub.com → Click your profile → **Settings**
   - Click **SSH and GPG keys** (left sidebar)
   - Click **New SSH key**
   - Title: `WSL Portfolio`
   - Key: Paste your public key
   - Click **Add SSH key**

4. **Switch to SSH and Push:**
   ```bash
   cd /home/rmdn/my-app
   git remote set-url origin git@github.com:rmdnnnn/ahmedramadan.git
   git push -f origin main
   ```

---

## Method 3: Direct URL with Token (One-Time)

If you have the token, you can embed it in the URL:

```bash
cd /home/rmdn/my-app
git remote set-url origin https://YOUR_TOKEN@github.com/rmdnnnn/ahmedramadan.git
git push -f origin main
```

*(Replace `YOUR_TOKEN` with your actual token)*

---

## Which Method Should I Use?

- **SSH (Method 2)**: Best for long-term use, no token expiration
- **Token (Method 1)**: Good if you prefer HTTPS
- **Direct URL (Method 3)**: Quick but less secure (token in URL)

**Recommendation**: Use SSH (Method 2) - it's the most reliable!


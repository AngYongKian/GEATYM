# GitHub Publishing Guide for GEATYM

This guide will walk you through publishing your GEATYM website to GitHub.

## 📋 Prerequisites

- ✅ Git installed on your computer
- ✅ GitHub account created
- ✅ Node.js and npm installed
- ✅ All dependencies installed (`npm install` completed)

## 🚀 Step-by-Step Publishing Process

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd c:\Users\angyo\Desktop\General\AntiGravity\GEATYM

# Check if git is already initialized
git status
```

If you see "fatal: not a git repository", initialize git:

```bash
git init
```

### Step 2: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `GEATYM` (or your preferred name)
   - **Description**: "Premium Fitness Fashion E-commerce Website"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 3: Connect Your Local Repository to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/GEATYM.git

# Or if using SSH:
git remote add origin git@github.com:YOUR_USERNAME/GEATYM.git
```

### Step 4: Stage and Commit Your Files

```bash
# Check what files will be committed
git status

# Add all files (respecting .gitignore)
git add .

# Commit with a message
git commit -m "Initial commit: GEATYM e-commerce website"
```

### Step 5: Push to GitHub

```bash
# Push to the main branch
git push -u origin main

# If your default branch is 'master', use:
git push -u origin master
```

### Step 6: Enable GitHub Pages (Optional)

To host your website on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The workflow in `.github/workflows/deploy.yml` will automatically deploy your site

Your site will be available at: `https://YOUR_USERNAME.github.io/GEATYM/`

## 🔄 Making Updates

After making changes to your code:

```bash
# 1. Check what changed
git status

# 2. Add the changes
git add .

# 3. Commit with a descriptive message
git commit -m "Description of your changes"

# 4. Push to GitHub
git push
```

## 🛠️ Common Git Commands

```bash
# View commit history
git log --oneline

# View current branch
git branch

# Create and switch to a new branch
git checkout -b feature/new-feature

# Switch back to main branch
git checkout main

# Pull latest changes from GitHub
git pull

# View remote repository URL
git remote -v
```

## ✅ Verification Checklist

Before pushing to GitHub, verify:

- [ ] All dependencies are installed
- [ ] Build completes successfully (`npm run build`)
- [ ] `.gitignore` is properly configured
- [ ] No sensitive data (API keys, passwords) in code
- [ ] README.md is up to date
- [ ] All files are committed

## 🚨 Important Notes

### Files That Should NOT Be Committed

The `.gitignore` file ensures these are excluded:

- `node_modules/` - Dependencies (too large, can be reinstalled)
- `dist/` - Build output (generated from source)
- `.env` files - Environment variables (may contain secrets)
- Editor-specific files (`.vscode/`, `.idea/`)

### Files That SHOULD Be Committed

- Source code (`*.tsx`, `*.ts`, `*.css`)
- Configuration files (`package.json`, `tsconfig.json`, `vite.config.ts`)
- Documentation (`README.md`)
- Assets (`images/`)
- `.gitignore` itself

## 🔐 Security Best Practices

1. **Never commit**:
   - API keys
   - Passwords
   - Private keys
   - `.env` files with secrets

2. **Use environment variables** for sensitive data

3. **Review changes** before committing:
   ```bash
   git diff
   ```

## 📞 Need Help?

If you encounter issues:

1. Check the error message carefully
2. Verify your Git configuration:
   ```bash
   git config --list
   ```
3. Ensure you have the correct repository URL:
   ```bash
   git remote -v
   ```

## 🎉 Success!

Once pushed, your code will be:
- ✅ Backed up on GitHub
- ✅ Version controlled
- ✅ Ready for collaboration
- ✅ Automatically deployed (if GitHub Pages is enabled)

---

**Next Steps**: After publishing, you can share your repository URL with others or deploy to other platforms like Vercel or Netlify for production hosting.

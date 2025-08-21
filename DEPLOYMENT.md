# GitHub Pages Deployment Guide

## Prerequisites

1. Your repository is hosted on GitHub
2. You have push access to the repository
3. GitHub Pages is enabled in your repository settings

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/(root)** folder
6. Click **Save**

### 2. Configure Repository Settings

1. In **Settings** → **Pages**
2. Ensure **Source** is set to **Deploy from a branch**
3. **Branch** should be **gh-pages** and **folder** should be **/(root)**

### 3. First Deployment

The first deployment will happen automatically when you push to the `main` branch, thanks to the GitHub Actions workflow.

**Manual deployment (if needed):**
```bash
npm run deploy
```

### 4. Verify Deployment

1. Wait a few minutes for the deployment to complete
2. Visit your site at: `https://[username].github.io/sets-can-do-that`
3. Check the **Actions** tab in your repository to see deployment status

## Troubleshooting

### Common Issues

1. **Site not loading**: Check if the `gh-pages` branch exists and contains the built files
2. **404 errors**: Ensure the base path in `vite.config.js` matches your repository name
3. **Build failures**: Check the GitHub Actions logs for error details

### Manual Deployment

If GitHub Actions fails, you can deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Check Deployment Status

- **Repository Settings** → **Pages** shows the current deployment status
- **Actions** tab shows the workflow execution history
- **gh-pages** branch contains the deployed files

## File Structure After Deployment

```
gh-pages branch:
├── index.html
├── assets/
│   ├── main-[hash].js
│   └── main-[hash].css
└── .nojekyll
```

## Notes

- The `.nojekyll` file prevents GitHub from processing the site with Jekyll
- The base path in `vite.config.js` must match your repository name
- GitHub Pages may take a few minutes to reflect changes after deployment

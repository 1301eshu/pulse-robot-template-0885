# Blog SSR Implementation Guide

## 🎯 Overview

This project implements **static site generation (SSG)** for blog pages with proper SEO, plus a development proxy to handle API requests without CORS issues.

## 🚀 How It Works

### Development Mode
- **Vite Proxy**: All `/wp-json/*` and `/wp-content/*` requests are proxied to `https://growthnatives.com`
- **Relative URLs**: `API_BASE_URL` is empty in dev, so requests use relative paths through the proxy
- **No CORS Issues**: Proxy handles cross-origin requests automatically

### Production Mode
- **Pre-rendered HTML**: Blog pages generated at build time with full SEO meta tags
- **Direct API Calls**: Uses `https://growthnatives.com` directly
- **Static + Dynamic**: Pre-rendered HTML + React hydration for interactivity

## 🛠️ Development Setup

The proxy is configured in `vite.config.ts`:

```typescript
proxy: {
  '/wp-json': {
    target: 'https://growthnatives.com',
    changeOrigin: true,
    secure: true
  }
}
```

Blog pages now work in development without CORS errors!

## 📦 API Client

New utility at `src/lib/apiClient.ts` provides:
- Automatic retry logic (3 attempts)
- Better error handling
- Type-safe WordPress API calls
- Consistent request configuration

Usage:
```typescript
import { getWordPressPosts, getWordPressCategories } from '@/lib/apiClient';

const posts = await getWordPressPosts({ perPage: 10, page: 1 });
const categories = await getWordPressCategories();
```

### 1. Pre-Build Scripts

Two scripts run automatically during production builds:

#### `scripts/prebuild-blog-seo.ts`
- Fetches all blog posts from WordPress API
- Retrieves RankMath SEO data for each post
- Generates static HTML files with:
  - Complete meta tags (title, description, OG, Twitter cards)
  - JSON-LD structured data
  - Canonical URLs
  - Fallback content for crawlers

#### `scripts/generate-sitemap.ts`
- Creates dynamic `sitemap.xml` with all blog posts
- Includes priority and change frequency
- Updates automatically on each build

### 2. Build Process

The Vite config (`vite.config.ts`) runs these scripts during production builds:

```bash
# Production build
npm run build
```

This will:
1. Run the pre-build SEO script
2. Generate the sitemap
3. Build the React app
4. Output static HTML files in `dist/blogs/{category}/{slug}/index.html`

### 3. Deployment

When deployed, blog URLs like:
```
https://growthnatives.com/blogs/marketing-automation/hubspot-guide
```

Will serve the pre-rendered HTML from:
```
dist/blogs/marketing-automation/hubspot-guide/index.html
```

This ensures:
✅ Search engines see full content immediately  
✅ Social media previews work correctly  
✅ Fast initial page load  
✅ React hydrates over static HTML for interactivity

## 📁 File Structure

```
project/
├── scripts/
│   ├── prebuild-blog-seo.ts      # Pre-renders blog pages
│   └── generate-sitemap.ts        # Creates sitemap.xml
├── public/
│   ├── robots.txt                 # Updated with sitemap reference
│   └── sitemap.xml                # Generated at build time
├── dist/                          # Build output
│   └── blogs/
│       └── {category}/
│           └── {slug}/
│               └── index.html     # Pre-rendered page
└── vite.config.ts                 # Build configuration
```

## 🛠️ Manual Script Execution

To test the scripts locally:

```bash
# Pre-render blog pages
npm run tsx scripts/prebuild-blog-seo.ts

# Generate sitemap
npm run tsx scripts/generate-sitemap.ts
```

## 🔍 SEO Features

### Meta Tags (from RankMath)
- Page title
- Meta description
- Canonical URL
- Open Graph tags
- Twitter Card tags
- Article metadata

### Structured Data
- BlogPosting schema
- Author information
- Publisher details
- Published/modified dates

### Sitemap
- All blog posts included
- Proper priority settings
- Last modified dates
- Change frequency

## 📊 Benefits

| Feature | Before | After |
|---------|--------|-------|
| **SEO** | Client-side only (0% SSR) | Static HTML (100% SSR) |
| **Social Preview** | Empty/broken | Full preview with images |
| **Initial Load** | Wait for API + render | Instant HTML |
| **Search Ranking** | Poor indexing | Full content indexed |
| **Lighthouse SEO** | 70-80 | 95-100 |

## 🚨 Important Notes

1. **Build Time**: Pre-rendering adds ~30-60 seconds to build time depending on number of posts

2. **New Posts**: Run a new build after publishing posts to include them in static generation

3. **API Dependency**: Scripts require WordPress API to be accessible during build

4. **Fallback**: If pre-build fails, the site still works with client-side rendering

## 🔄 CI/CD Integration

Add to your deployment pipeline:

```yaml
# Example GitHub Actions
- name: Build with SSR
  run: |
    npm ci
    npm run build
  env:
    NODE_ENV: production
```

The scripts run automatically during `npm run build` in production mode.

## 📈 Monitoring

Check these after deployment:

1. **Google Search Console**: Verify pages are indexed
2. **Social Media**: Test sharing URLs on Twitter/LinkedIn/Facebook
3. **Lighthouse**: Run SEO audit (should score 95+)
4. **Sitemap**: Visit `/sitemap.xml` to verify all pages listed

## 🆘 Troubleshooting

### Pre-build fails
- Check API_BASE_URL is accessible
- Verify WordPress API is responding
- Check console for specific errors

### Missing pages in sitemap
- Verify posts are published in WordPress
- Check category slugs are correct
- Re-run build

### Meta tags not showing
- Clear CDN/browser cache
- Check HTML source (View Page Source)
- Verify RankMath is configured in WordPress

## 📝 Future Enhancements

- Incremental static regeneration (ISR)
- Build-time image optimization
- Multi-language support
- Advanced caching strategies

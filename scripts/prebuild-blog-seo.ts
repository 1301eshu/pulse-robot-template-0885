/**
 * Pre-build script to generate static HTML for blog pages with SEO meta tags
 * This ensures search engines can crawl blog content with proper meta tags
 */

import { API_BASE_URL } from '../apiconfig';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author_name: string;
  featured_media_url?: string;
  categories: string[];
}

interface RankMathHead {
  head?: string;
}

// Fetch all blog posts from WordPress API
async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed`
      );
      
      if (!response.ok) {
        hasMore = false;
        break;
      }

      const data = await response.json();
      
      if (data.length === 0) {
        hasMore = false;
        break;
      }

      const formattedPosts = data.map((post: any) => ({
        slug: post.slug,
        title: decodeHTML(post.title.rendered),
        excerpt: stripHTML(post.excerpt.rendered),
        date: post.date,
        author_name: post.author_name || 'Growth Natives',
        featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        categories: post._embedded?.['wp:term']?.[0]?.map((cat: any) => cat.slug) || []
      }));

      posts.push(...formattedPosts);
      page++;
    } catch (error) {
      console.error(`Error fetching posts page ${page}:`, error);
      hasMore = false;
    }
  }

  return posts;
}

// Fetch RankMath SEO data for a specific post
async function fetchRankMathData(categorySlug: string, postSlug: string): Promise<string> {
  try {
    const url = `${API_BASE_URL}/blogs/${categorySlug}/${postSlug}`;
    const apiUrl = `${API_BASE_URL}/wp-json/rankmath/v1/getHead?url=${url}`;
    
    const response = await fetch(apiUrl);
    const result: RankMathHead = await response.json();
    
    return result.head || '';
  } catch (error) {
    console.error(`Error fetching RankMath data for ${postSlug}:`, error);
    return '';
  }
}

// Generate static HTML template with SEO meta tags
function generateStaticHTML(post: BlogPost, rankMathHead: string): string {
  const categorySlug = post.categories[0] || 'general';
  const ogImage = post.featured_media_url || 'https://growthnatives.com/images/og-default.jpg';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  ${rankMathHead || `
  <!-- Fallback SEO tags if RankMath fails -->
  <title>${post.title} | Growth Natives</title>
  <meta name="description" content="${post.excerpt.substring(0, 160)}">
  <link rel="canonical" href="https://growthnatives.com/blogs/${categorySlug}/${post.slug}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt.substring(0, 160)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:url" content="https://growthnatives.com/blogs/${categorySlug}/${post.slug}">
  <meta property="og:type" content="article">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt.substring(0, 160)}">
  <meta name="twitter:image" content="${ogImage}">
  
  <!-- Article Meta -->
  <meta property="article:published_time" content="${post.date}">
  <meta property="article:author" content="${post.author_name}">
  `}
  
  <!-- Preconnect to API -->
  <link rel="preconnect" href="${API_BASE_URL}">
  <link rel="dns-prefetch" href="${API_BASE_URL}">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${post.title}",
    "description": "${post.excerpt.substring(0, 160)}",
    "image": "${ogImage}",
    "datePublished": "${post.date}",
    "author": {
      "@type": "Person",
      "name": "${post.author_name}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Growth Natives",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growthnatives.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://growthnatives.com/blogs/${categorySlug}/${post.slug}"
    }
  }
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
  
  <!-- SEO Content for crawlers -->
  <noscript>
    <article style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1>${post.title}</h1>
      <p><strong>Author:</strong> ${post.author_name}</p>
      <p><strong>Published:</strong> ${new Date(post.date).toLocaleDateString()}</p>
      <div>${post.excerpt}</div>
      <p><a href="https://growthnatives.com/blogs/${categorySlug}/${post.slug}">Read full article</a></p>
    </article>
  </noscript>
</body>
</html>`;
}

// Utility functions
function decodeHTML(html: string): string {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#039;/g, "'");
}

function stripHTML(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

// Main execution
async function main() {
  console.log('🚀 Starting blog SEO pre-build...');
  
  const posts = await fetchAllBlogPosts();
  console.log(`📝 Found ${posts.length} blog posts`);
  
  const outputDir = path.resolve(process.cwd(), 'dist', 'blogs');
  
  // Create base blogs directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  // Generate static HTML for each post
  for (const post of posts) {
    try {
      const categorySlug = post.categories[0] || 'general';
      const categoryDir = path.join(outputDir, categorySlug);
      const postDir = path.join(categoryDir, post.slug);
      
      // Create category and post directories
      if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
      }
      
      // Fetch RankMath SEO data
      const rankMathHead = await fetchRankMathData(categorySlug, post.slug);
      
      // Generate HTML
      const html = generateStaticHTML(post, rankMathHead);
      
      // Write to index.html in the post directory
      fs.writeFileSync(path.join(postDir, 'index.html'), html);
      
      successCount++;
      console.log(`✅ Generated: /blogs/${categorySlug}/${post.slug}`);
    } catch (error) {
      errorCount++;
      console.error(`❌ Failed to generate ${post.slug}:`, error);
    }
  }
  
  console.log(`\n✨ Pre-build complete!`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Total: ${posts.length}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main as prebuildBlogSEO };

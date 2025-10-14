/**
 * Generate dynamic sitemap.xml from WordPress blog posts
 */

import { API_BASE_URL } from '../apiconfig';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  date: string;
  modified: string;
  categories: string[];
}

async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed`
      );
      
      if (!response.ok) break;

      const data = await response.json();
      if (data.length === 0) break;

      posts.push(...data.map((post: any) => ({
        slug: post.slug,
        date: post.date,
        modified: post.modified,
        categories: post._embedded?.['wp:term']?.[0]?.map((cat: any) => cat.slug) || []
      })));

      page++;
    } catch (error) {
      console.error(`Error fetching posts:`, error);
      break;
    }
  }

  return posts;
}

function generateSitemap(posts: BlogPost[]): string {
  const baseUrl = 'https://growthnatives.com';
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/blogs', priority: '0.9', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/company', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact-us', priority: '0.8', changefreq: 'monthly' },
  ];

  const urls = [
    ...staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`),
    ...posts.map(post => {
      const categorySlug = post.categories[0] || 'general';
      return `
  <url>
    <loc>${baseUrl}/blogs/${categorySlug}/${post.slug}</loc>
    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
  ].join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

async function main() {
  console.log('🗺️  Generating sitemap.xml...');
  
  const posts = await fetchAllBlogPosts();
  console.log(`📝 Found ${posts.length} blog posts`);
  
  const sitemap = generateSitemap(posts);
  const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  
  console.log(`✅ Sitemap generated: ${outputPath}`);
  console.log(`   Total URLs: ${posts.length + 5}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main as generateSitemap };

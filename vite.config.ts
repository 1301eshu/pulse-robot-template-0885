import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Pre-build blog pages for SSR/SEO
    {
      name: 'prebuild-blog-seo',
      async buildStart() {
        if (mode === 'production') {
          console.log('🔥 Running blog SEO pre-build...');
          try {
            await execAsync('tsx scripts/prebuild-blog-seo.ts');
            await execAsync('tsx scripts/generate-sitemap.ts');
          } catch (error) {
            console.warn('⚠️ Blog pre-build failed (non-critical):', error);
          }
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
}));

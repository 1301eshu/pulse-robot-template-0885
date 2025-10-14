// In development, use relative URLs (proxied by Vite)
// In production, use the full domain
export const API_BASE_URL = import.meta.env.DEV 
  ? '' // Empty string for relative URLs in dev (uses Vite proxy)
  : 'https://growthnatives.com';
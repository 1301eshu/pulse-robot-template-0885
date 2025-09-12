import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const StaticFileHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    
    // Check if this is a request for sitemap.xml or robots.txt
    if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
      // Force a full page reload to serve the static file
      window.location.href = pathname;
    }
  }, [location]);

  return null;
};
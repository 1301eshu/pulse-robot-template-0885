import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // Skip redirect for root path
    if (pathname === '/') return;
    
    // If pathname doesn't end with trailing slash, redirect to add it
    if (!pathname.endsWith('/')) {
      const newPath = pathname + '/' + search + hash;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};  
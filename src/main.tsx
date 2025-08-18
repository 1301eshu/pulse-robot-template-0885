import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadDynamicScripts } from './utils/scriptManager';
import { HelmetProvider } from 'react-helmet-async'

loadDynamicScripts();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

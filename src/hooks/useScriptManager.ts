import { useEffect, useRef } from 'react';
import { getActiveScripts, ScriptConfig } from '../config/scripts';

export const useScriptManager = () => {
  const loadedScripts = useRef<Set<string>>(new Set());

  useEffect(() => {
    const activeScripts = getActiveScripts();
    
    // Load scripts that aren't already loaded
    activeScripts.forEach((scriptConfig) => {
      if (!loadedScripts.current.has(scriptConfig.id)) {
        loadScript(scriptConfig);
        loadedScripts.current.add(scriptConfig.id);
      }
    });

    // Cleanup function to remove scripts if needed
    return () => {
      // Note: Most tracking scripts should persist across route changes
      // Only remove if specifically needed for your use case
    };
  }, []);

  const loadScript = (config: ScriptConfig) => {
    // Skip if script already exists
    if (document.getElementById(config.id)) {
      return;
    }

    const script = document.createElement('script');
    script.id = config.id;
    script.type = config.type || 'text/javascript';

    // Set async/defer attributes
    if (config.async) script.async = true;
    if (config.defer) script.defer = true;

    // Add custom attributes
    if (config.attributes) {
      Object.entries(config.attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }

    // Set script content
    if (config.src) {
      script.src = config.src;
      
      // Add error handling for external scripts
      script.onerror = () => {
        console.warn(`Failed to load script: ${config.name} (${config.src})`);
      };
      
      script.onload = () => {
        console.log(`Successfully loaded script: ${config.name}`);
      };
    } else if (config.innerHTML) {
      script.innerHTML = config.innerHTML;
    }

    // Add script to document head for better performance
    const targetElement = config.type === 'application/ld+json' 
      ? document.head 
      : document.head;
      
    targetElement.appendChild(script);

    console.log(`Loading script: ${config.name} (Priority: ${config.priority})`);
  };

  const loadScriptById = (id: string) => {
    const scriptConfig = getActiveScripts().find(s => s.id === id);
    if (scriptConfig && !loadedScripts.current.has(id)) {
      loadScript(scriptConfig);
      loadedScripts.current.add(id);
    }
  };

  const removeScript = (id: string) => {
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
      loadedScripts.current.delete(id);
      console.log(`Removed script: ${id}`);
    }
  };

  return {
    loadScriptById,
    removeScript,
    loadedScripts: Array.from(loadedScripts.current),
  };
};
import { scriptsConfig } from '../config/scripts';

export const loadDynamicScripts = () => {
  console.log('Loading tracking scripts...');
  
  scriptsConfig.forEach(script => {
    if (!script.enabled) {
      console.log(`${script.name} is disabled`);
      return;
    }

    console.log(`Loading ${script.name}...`);

    // Load head scripts
    if (script.headScript) {
      // Handle both inline scripts and script tags with src
      if (script.headScript.includes('<script')) {
        // HTML script tags - insert as HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = script.headScript;
        const scripts = tempDiv.querySelectorAll('script');
        
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
            newScript.async = oldScript.async;
            newScript.defer = oldScript.defer;
          } else {
            newScript.innerHTML = oldScript.innerHTML;
          }
          document.head.appendChild(newScript);
        });

        // Handle noscript tags in head
        const noscripts = tempDiv.querySelectorAll('noscript');
        noscripts.forEach(noscript => {
          document.head.appendChild(noscript.cloneNode(true));
        });
      } else {
        // Inline JavaScript code
        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = script.headScript;
        document.head.appendChild(scriptElement);
      }
    }

    // Load body scripts (including noscript tags)
    if (script.bodyScript) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = script.bodyScript;
      
      // Insert each child element
      while (tempDiv.firstChild) {
        const firstChild = document.body.firstChild;
        if (firstChild) {
          document.body.insertBefore(tempDiv.firstChild, firstChild);
        } else {
          document.body.appendChild(tempDiv.firstChild);
        }
      }
    }
  });

  const enabledScripts = scriptsConfig.filter(s => s.enabled);
  console.log(`Loaded ${enabledScripts.length} tracking scripts:`, enabledScripts.map(s => s.name));
};

// Utility function to get enabled scripts info
export const getEnabledScripts = () => {
  return scriptsConfig.filter(script => script.enabled);
};

// Utility function to enable/disable scripts programmatically
export const toggleScript = (scriptId: string, enabled: boolean) => {
  const script = scriptsConfig.find(s => s.id === scriptId);
  if (script) {
    script.enabled = enabled;
    console.log(`${script.name} ${enabled ? 'enabled' : 'disabled'}`);
  }
};
import { useScriptManager } from '../hooks/useScriptManager';

/**
 * ScriptManager Component
 * 
 * This component handles loading of all third-party SEO and tracking scripts
 * across the entire application. It should be included once in the main App component.
 * 
 * Features:
 * - Loads scripts asynchronously and non-blocking
 * - Configurable via scripts.ts config file
 * - Prevents duplicate script loading
 * - Provides error handling and logging
 * - Easy to add/remove scripts through configuration
 * 
 * Usage:
 * Import and include in your main App component:
 * <ScriptManager />
 */
const ScriptManager: React.FC = () => {
  // Initialize script loading
  useScriptManager();

  // This component doesn't render any visible content
  // It's purely for script management side effects
  return null;
};

export default ScriptManager;
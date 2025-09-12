// Example usage:

// 1. For static HTML string replacement:
// import { handleApiDomainReplacement } from './replaceApiDomain';
// const processedHtml = handleApiDomainReplacement(rawHtmlString);

// 2. For dynamic DOM observation (e.g., in your main app file or a layout component):
// import { handleApiDomainReplacement } from './replaceApiDomain';
// useEffect(() => {
//   handleApiDomainReplacement();
// }, []);
/**
 * Replaces all occurrences of 'api.growthnatives' with 'growthnatives' in the provided HTML string.
 * @param htmlContent - The HTML content to process.
 * @returns The processed HTML content with replaced URLs.
 */

/**
 * Handles replacement of 'api.growthnatives' with 'growthnatives' in href attributes
 * for both static HTML strings and dynamic DOM content. Call this function once in your app.
 * If htmlContent is provided, returns the processed string. If not, observes the DOM.
 */
export function handleApiDomainReplacement(htmlContent?: string): string | void {
  if (typeof htmlContent === 'string') {
    // Replace only in href attributes in HTML string
    return htmlContent.replace(/href=("|')https?:\/\/api\.growthnatives/g, (match) => match.replace('api.', ''));
  }
  // DOM replacement and observation
  const replaceInNode = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      // Replace in all <a> tags' href attributes
      if (el.tagName === 'A' && el.hasAttribute('href')) {
        const href = el.getAttribute('href');
        if (href && href.includes('api.growthnatives')) {
          el.setAttribute('href', href.replace('api.growthnatives', 'growthnatives'));
        }
      }
      // Recursively check child nodes
      el.querySelectorAll('a[href*="api.growthnatives"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href) {
          anchor.setAttribute('href', href.replace('api.growthnatives', 'growthnatives'));
        }
      });
    }
  };

  // Initial replace
  replaceInNode(document.body);

  // Observe future changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(replaceInNode);
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
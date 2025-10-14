/**
 * API Client with error handling and retry logic
 */

import { API_BASE_URL } from '../../apiconfig';

interface FetchOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
}

/**
 * Fetch wrapper with retry logic and better error handling
 */
export async function apiFetch(
  endpoint: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { retries = 2, retryDelay = 1000, ...fetchOptions } = options;
  
  const url = `${API_BASE_URL}${endpoint}`;
  
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      });
      
      // Return response even if not ok (let caller handle status codes)
      return response;
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry on last attempt
      if (attempt < retries) {
        console.warn(`API request failed (attempt ${attempt + 1}/${retries + 1}), retrying...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
  }
  
  // All retries failed
  throw new Error(`API request failed after ${retries + 1} attempts: ${lastError?.message || 'Unknown error'}`);
}

/**
 * Fetch JSON data with type safety
 */
export async function fetchJSON<T>(
  endpoint: string,
  options?: FetchOptions
): Promise<T> {
  const response = await apiFetch(endpoint, options);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Get WordPress posts with proper error handling
 */
export async function getWordPressPosts(params: {
  perPage?: number;
  page?: number;
  categories?: number;
  slug?: string;
}) {
  const searchParams = new URLSearchParams();
  
  if (params.perPage) searchParams.set('per_page', params.perPage.toString());
  if (params.page) searchParams.set('page', params.page.toString());
  if (params.categories) searchParams.set('categories', params.categories.toString());
  if (params.slug) searchParams.set('slug', params.slug);
  
  searchParams.set('_embed', 'true');
  
  return apiFetch(`/wp-json/wp/v2/posts?${searchParams.toString()}`);
}

/**
 * Get WordPress categories
 */
export async function getWordPressCategories(perPage = 100) {
  return fetchJSON(`/wp-json/wp/v2/categories?per_page=${perPage}`);
}

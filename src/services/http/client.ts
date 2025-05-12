import type { HttpRequest } from "./types";
 /**
  * Standardizes error handling (e.g., 401 → redirect to login)
  * Adds consistent request/response transformations
  * Example: Automatically adds auth headers
  */
export const httpClient = async <T>({
    endpoint,
    method,
    body,
    headers = {}
  }: HttpRequest): Promise<T> => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const url = `${baseUrl}${endpoint}`;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    });
  
    if (!response.ok) {
      const error = await parseError(response);
      throw error;
    }
  
    return response.json() as Promise<T>;
  };
  
const parseError = async (response: Response) => {
    try {
      const error = await response.json();
      return new Error(error.message || 'HTTP request failed');
    } catch {
      return new Error(response.statusText);
    }
};
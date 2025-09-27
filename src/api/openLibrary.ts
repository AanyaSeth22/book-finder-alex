// src/api/openLibrary.ts
import type { OpenLibraryResponse } from '../types';

const BASE_URL = 'https://openlibrary.org/search.json';

/**
 * Fetches books from the Open Library API based on a query and page number.
 * @param query The search term (title, author, etc.)
 * @param page The page number to fetch (limit is 20 per page)
 * @returns A promise that resolves to OpenLibraryResponse data
 */
export const searchBooks = async (query: string, page: number = 1): Promise<OpenLibraryResponse> => {
    // Open Library uses 'q' for general search across fields
    const url = `${BASE_URL}?q=${encodeURIComponent(query)}&limit=20&page=${page}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: OpenLibraryResponse = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch books:", error);
        throw new Error("Could not connect to the Open Library service.");
    }
};

/**
 * Helper function to generate the book cover URL.
 * Open Library Cover API format: https://covers.openlibrary.org/b/id/{ID}-{SIZE}.jpg
 * @param coverId The cover ID (cover_i) from the API response
 * @param size 'S' (small), 'M' (medium), or 'L' (large)
 * @returns The full URL to the book cover image
 */
export const getCoverImageUrl = (coverId: number, size: 'S' | 'M' | 'L' = 'M'): string => {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

// src/utils/sorter.ts
import type { Book, SortKey } from '../types';

/**
 * Sorts an array of Book objects based on a specified key.
 * This is client-side sorting applied only to the current 20 results.
 * @param books The array of books to sort.
 * @param key The property key to sort by.
 * @returns The sorted array of books.
 */
export const sortBooks = (
    books: Book[], 
    key: SortKey
): Book[] => {
    // 1. Create a shallow copy to ensure immutability
    const sortedBooks = [...books];

    if (key === 'relevance') {
        // Relevance is the default API order
        return sortedBooks; 
    }
    
    sortedBooks.sort((a, b) => {
        // Use the nullish coalescing operator (??) to treat missing values as 0 for sorting
        const aVal = a[key] ?? 0; 
        const bVal = b[key] ?? 0;
        
        if (key === 'first_publish_year') {
            // Sort years in descending order (Newest first)
            return bVal - aVal;
        }

        if (key === 'edition_count') {
            // Sort counts in descending order (Most popular/available first)
            return bVal - aVal;
        }

        return 0; // Should not happen
    });

    return sortedBooks;
};

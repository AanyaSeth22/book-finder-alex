// src/types.ts

// A simplified interface for the core book details Alex needs
export interface Book {
    key: string;            // Unique identifier (used for links/details)
    title: string;
    author_name?: string[]; // Array of authors
    first_publish_year?: number;
    cover_i?: number;       // ID for fetching the cover image
    edition_count?: number; // Useful for sorting/relevance
    subject?: string[];     // Subjects/topics
}

// The structure of the Open Library API's top-level response
export interface OpenLibraryResponse {
    numFound: number;       // Total number of results
    start: number;
    numFoundExact: boolean;
    docs: Book[];           // The array of book data
}

// Interface for the state of the entire search application
export interface AppState {
    searchTerm: string;
    results: Book[];
    isLoading: boolean;
    isError: boolean;
    numFound: number;
    currentPage: number;
    // Keys for client-side sorting
    sortKey: 'relevance' | 'first_publish_year' | 'edition_count';
}

// Define the type for the SortKey used in AppState and SortDropdown
export type SortKey = AppState['sortKey'];

import React from 'react';
import type { Book } from '../types';
import BookCard from './BookCard';

interface ResultsListProps {
    results: Book[];
    isLoading: boolean;
    isError: boolean;
    numFound: number;
    searchTerm: string;
}

const ResultsList: React.FC<ResultsListProps> = ({ 
    results, 
    isLoading, 
    isError, 
    numFound,
    searchTerm 
}) => {
    // 1. Loading State
    if (isLoading) {
        return (
            <div className="text-center p-12 bg-white rounded-lg shadow-md">
                <svg className="animate-spin h-8 w-8 text-indigo-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-3 text-lg text-indigo-600">Searching the stacks...</p>
            </div>
        );
    }

    // 2. Error State (Network failure or zero results on initial search)
    if (isError) {
        return (
            <div className="text-center p-12 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xl font-semibold text-red-600">Search Failed or No Results Found!</p>
                <p className="text-gray-500 mt-2">
                    {numFound === 0 && searchTerm 
                        ? `We couldn't find any books matching "${searchTerm}". Try different keywords.`
                        : "There was a problem connecting to the Open Library API. Please try again."
                    }
                </p>
            </div>
        );
    }

    // 3. Initial/Empty State (before any search is performed)
    if (results.length === 0 && !searchTerm) {
        return (
            <div className="text-center p-12 bg-white rounded-lg shadow-md">
                <p className="text-xl font-semibold text-gray-800">Welcome, Alex!</p>
                <p className="text-gray-500 mt-2">Start by entering a book title or author above to find what you need for your studies.</p>
            </div>
        );
    }

    // 4. Success State
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Found {numFound.toLocaleString()} results 
                {searchTerm && <span className="text-base font-normal text-indigo-600 ml-2">for "{searchTerm}"</span>}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.map((book) => (
                    // Use 'key' for React lists; use a combination for uniqueness
                    <BookCard key={`${book.key}-${book.first_publish_year}`} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ResultsList;
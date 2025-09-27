import React, { useState, useCallback, useMemo } from 'react';
// 💡 IMPORTANT: Using 'import type' for interfaces
import type { AppState, SortKey} from './types'; 
import { searchBooks } from './api/openLibrary';
import { sortBooks } from './utils/sorter';

// Import all UI components
import SearchBar from './components/SearchBar.tsx';
import ResultsList from './components/ResultsList.tsx';
import Pagination from './components/Pagination.tsx';
import SortDropdown from './components/SortDropdown.tsx';


// Initial state constant (must be defined outside the component)
const initialAppState: AppState = {
    searchTerm: '',
    results: [],
    isLoading: false,
    isError: false,
    numFound: 0,
    currentPage: 1,
    sortKey: 'relevance', 
};

const App: React.FC = () => {
    const [state, setState] = useState<AppState>(initialAppState);

    // Function to handle the API search call
    const handleSearch = useCallback(async (query: string, page: number = 1) => {
        if (!query.trim()) return;

        // 1. Set loading state and reset error/results
        setState(prev => ({ 
            ...prev, 
            isLoading: true, 
            isError: false, 
            // Only update searchTerm on a new search (page 1)
            searchTerm: page === 1 ? query : prev.searchTerm, 
            currentPage: page 
        }));

        try {
            // 2. Perform the API call
            const data = await searchBooks(query, page);

            // 3. Update state with results
            setState(prev => ({
                ...prev,
                results: data.docs,
                numFound: data.numFound,
                isLoading: false,
                // Error if numFound is 0, but only for the very first page search
                isError: data.numFound === 0 && page === 1, 
            }));

        } catch (error) {
            // 4. Update state on network/API failure
            setState(prev => ({
                ...prev,
                isLoading: false,
                isError: true,
                results: [],
                numFound: 0,
            }));
        }
    }, []);

    // Function to handle changing the current page (triggered by Pagination)
    const handlePageChange = (page: number) => {
        if (page !== state.currentPage) {
            handleSearch(state.searchTerm, page);
            window.scrollTo(0, 0); // Scroll to top for better UX
        }
    };

    // Function to handle changing the sorting method (triggered by SortDropdown)
    const handleSortChange = (key: SortKey) => {
        setState(prev => ({ ...prev, sortKey: key }));
    };

    // Use useMemo to apply client-side sorting only when results or sortKey change
    const sortedResults = useMemo(() => {
        return sortBooks(state.results, state.sortKey);
    }, [state.results, state.sortKey, state.sortKey]);

    // Determine visibility of controls
    const showControls = state.results.length > 0 && !state.isLoading && !state.isError;
    const maxPages = Math.ceil(state.numFound / 20); // API limit is 20 per page

    return (
        <div className="min-h-screen bg-gray-50 pb-10 font-sans">
            <header className="text-center py-10 bg-white shadow-lg">
                <h1 className="text-5xl font-extrabold text-indigo-700">
                    <span className="text-indigo-400">Page</span>Turner
                </h1>
                <p className="text-gray-500 mt-2 text-lg">
                    Alex's Open Library Book Finder
                </p>
            </header>
            
            <main className="container mx-auto p-4 md:p-8 max-w-7xl">
                {/* 1. Search Bar */}
                <SearchBar onSearch={(query) => handleSearch(query, 1)} />

                {/* 2. Controls (Sort Dropdown) */}
                <div className="flex justify-end mt-6">
                    <SortDropdown 
                        currentSortKey={state.sortKey}
                        onSortChange={handleSortChange}
                        isVisible={showControls}
                    />
                </div>
                
                {/* 3. Results List */}
                <ResultsList 
                    results={sortedResults} 
                    isLoading={state.isLoading}
                    isError={state.isError}
                    numFound={state.numFound}
                    searchTerm={state.searchTerm}
                />
                
                {/* 4. Pagination */}
                {/* Only show pagination if there are more than 20 results (or 1 page) AND we are not loading */}
                {maxPages > 1 && !state.isLoading && (
                    <Pagination 
                        currentPage={state.currentPage}
                        totalResults={state.numFound}
                        onPageChange={handlePageChange}
                    />
                )}
            </main>
        </div>
    );
};

export default App;

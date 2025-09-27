import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalResults: number;
    resultsPerPage?: number; // Defaults to 20 based on Open Library API common usage
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
    currentPage, 
    totalResults, 
    resultsPerPage = 20, 
    onPageChange 
}) => {
    // Determine the total number of pages needed
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    
    // Only show pagination if there is more than one page
    if (totalPages <= 1) {
        return null; 
    }

    // Helper to generate an array of visible page numbers
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5; // Max buttons to show at once (e.g., 1, 2, 3, 4, 5, ..., N)
        const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        const endPage = Math.min(totalPages, startPage + maxVisible - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
                Previous
            </button>

            {/* Page Buttons */}
            {pageNumbers.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        page === currentPage
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-indigo-50 hover:text-indigo-700'
                    }`}
                >
                    {page}
                </button>
            ))}
            
            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
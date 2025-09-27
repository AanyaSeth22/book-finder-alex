import React, { useState } from 'react';

// Define the component props
interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            // Call the search handler from App.tsx
            onSearch(input.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 p-4 bg-white rounded-lg shadow-lg">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search by title, author, or keyword..."
                aria-label="Book search input"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Search Books
            </button>
        </form>
    );
};

export default SearchBar;
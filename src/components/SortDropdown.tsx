import React from 'react';
import type { SortKey } from '../types';

interface SortDropdownProps {
    currentSortKey: SortKey;
    onSortChange: (key: SortKey) => void;
    // 💡 FIX: ADDED isVisible property here
    isVisible: boolean; 
}

const SortDropdown: React.FC<SortDropdownProps> = ({ currentSortKey, onSortChange, isVisible }) => {
    
    // Use the isVisible prop for conditional rendering
    if (!isVisible) return null;

    return (
        <div className="flex items-center space-x-3 text-base text-gray-600">
            <label htmlFor="sort-select" className="font-semibold text-gray-700">Sort by:</label>
            <select
                id="sort-select"
                value={currentSortKey}
                onChange={(e) => onSortChange(e.target.value as SortKey)}
                className="p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
                <option value="relevance">Relevance (Default)</option>
                <option value="first_publish_year">Year (Newest First)</option>
                <option value="edition_count">Editions (Most Available)</option>
            </select>
        </div>
    );
};

export default SortDropdown;

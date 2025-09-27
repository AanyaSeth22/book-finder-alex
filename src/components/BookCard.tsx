import React from 'react';
import type{ Book } from '../types';
import { getCoverImageUrl } from '../api/openLibrary';

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    // Generate the cover URL or use a placeholder if cover_i is missing
    const coverUrl = book.cover_i 
        ? getCoverImageUrl(book.cover_i, 'M') 
        : 'https://via.placeholder.com/150x200?text=No+Cover';

    // Format authors for display
    const authors = book.author_name?.join(', ') || 'Unknown Author';

    return (
        <div className="bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4 flex flex-grow">
                {/* Book Cover */}
                <div className="flex-shrink-0 w-24 h-32 mr-4">
                    <img 
                        src={coverUrl}
                        alt={`Cover for ${book.title}`}
                        className="w-full h-full object-cover rounded-md shadow"
                    />
                </div>
                
                {/* Details */}
                <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 truncate" title={book.title}>
                        {book.title}
                    </h3>
                    <p className="text-sm text-indigo-600 mt-1">
                        By: {authors}
                    </p>
                    <div className="mt-2 text-sm text-gray-600">
                        <p>
                            **First Published:** {book.first_publish_year || 'N/A'}
                        </p>
                        <p>
                            **Editions:** {book.edition_count || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
            {/* Optional: Add a call-to-action or more details button */}
            <div className="p-4 pt-0">
                 <a 
                     href={`https://openlibrary.org${book.key}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-indigo-500 text-sm hover:text-indigo-700 font-medium"
                 >
                    View Details →
                 </a>
            </div>
        </div>
    );
};

export default BookCard;
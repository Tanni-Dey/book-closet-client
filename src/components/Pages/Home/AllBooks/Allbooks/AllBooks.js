import React from 'react';
import useAllBooks from '../../../../hooks/useAllbooks/useAllBooks';
import Book from '../Book/Book';

const AllBooks = () => {
    const [books, setBooks] = useAllBooks();
    return (
        <div className='p-20 bg-gray-200'>
            <h2 className='text-3xl font-serif text-red-400'>Popular Books</h2>
            <div className='grid grid-cols-1 gap-10 mt-20 md:grid-cols-3'>
                {
                    books.map(book => <Book key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;
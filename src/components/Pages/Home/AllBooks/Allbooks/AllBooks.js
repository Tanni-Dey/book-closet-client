import React from 'react';
import { Link } from 'react-router-dom';
import useAllBooks from '../../../../hooks/useAllbooks/useAllBooks';
import Book from '../Book/Book';

const AllBooks = () => {
    const [books, setBooks] = useAllBooks();
    return (
        <div className='pt-10 md:pt-20 pb-20 px-10 md:px-20 bg-gray-200'>
            <h2 className='text-3xl font-serif text-red-400'>Popular Books</h2>
            <input type="text" />
            <div className='grid grid-cols-1 gap-10 mt-10 md:mt-20 md:grid-cols-3'>
                {
                    books.slice(0, 6).map(book => <Book key={book._id} book={book} />)
                }
            </div>
            <Link to='/allbooks'><button className='font-serif md:w-1/2 mx-auto justify-center md:text-xl text-white bg-red-400 rounded-3xl px-10 py-2 mt-20 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>Manage All Books</button>  </Link>
        </div>
    );
};

export default AllBooks;
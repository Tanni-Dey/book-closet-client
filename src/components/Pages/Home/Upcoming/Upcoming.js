import React from 'react';
import UpcommingSingle from './UpcommingSingle/UpcommingSingle';

const Upcoming = () => {
    const books = [
        { id: 1, name: 'Travel Books', discount: '50%', img: 'https://img.freepik.com/free-psd/best-trip-lettering-with-earth-globe-airplane-toy_23-2148212918.jpg?t=st=1651318811~exp=1651319411~hmac=fbee9bfc5796ab23d1c1587102ff163610534d80f5b0d61c48bd796852f128c6&w=740' },
        { id: 2, name: 'Design Books', discount: '40%', img: 'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?t=st=1651318489~exp=1651319089~hmac=75c8e10abe79355048fd035d64acc02a4cf087b0715d71e25ead91ce04871e9f&w=740' },
        { id: 3, name: 'Cooking Books', discount: '20%', img: 'https://img.freepik.com/free-vector/vector-cartoon-illustration-various-vegetables-wooden-background_1441-519.jpg?t=st=1651318718~exp=1651319318~hmac=1ebd0eddc7092a3887f3999de07790df47c7ef41b470918ff8db8a2e79b3afb9&w=900' },
    ]
    return (
        <div className='my-20 px-20'>
            <h2 className='text-3xl font-serif text-red-400'>Upcoming Books</h2>
            <div className='grid grid-cols-1 gap-5 mt-20 md:grid-cols-3'>
                {
                    books.map(book => <UpcommingSingle key={book.id} book={book}></UpcommingSingle>)
                }
            </div>
        </div>
    );
};

export default Upcoming;
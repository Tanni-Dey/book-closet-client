import React, { useEffect, useState } from 'react';
import UpcommingSingle from './UpcommingSingle/UpcommingSingle';

const Upcoming = () => {
    const [upcomingBooks, setUpcomingBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-closet-server.onrender.com/upcoming')
            .then(res => res.json())
            .then(data => setUpcomingBooks(data))
    }, [])
    return (
        <div className='my-20 px-10 md:px-20'>
            <h2 className='text-2xl md:text-3xl font-serif text-red-400'>Upcoming Books</h2>
            <div className='grid grid-cols-1 gap-5 mt-20 md:grid-cols-3'>
                {
                    upcomingBooks.map(book => <UpcommingSingle key={book._id} book={book}></UpcommingSingle>)
                }
            </div>
        </div>
    );
};

export default Upcoming;
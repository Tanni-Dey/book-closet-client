import React, { useEffect, useState } from 'react';

const useAllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://book-closet-server.onrender.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks];
};

export default useAllBooks;
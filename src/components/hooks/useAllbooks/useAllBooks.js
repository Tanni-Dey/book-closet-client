import React, { useEffect, useState } from 'react';

const useAllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                console.log(data)
            })
    }, [])
    return [books, setBooks];
};

export default useAllBooks;
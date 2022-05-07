import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAllBooks from '../../hooks/useAllbooks/useAllBooks';

const MyBooks = () => {
    const [books, setBooks] = useAllBooks()
    const [myaddedBooks, setMyaddedBooks] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        const getMyBooks = async () => {
            const email = user.email;
            try {

                const { data } = await axios.get(`http://localhost:5000/mybook?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyaddedBooks(data)

            }
            catch (error) {
                signOut(auth)
                navigate('/login')
                toast('Session time out, Please login')
            }
        }
        getMyBooks()
    }, [books])

    const handleDelete = (id) => {
        const isConfirm = window.confirm('Are you want delete this book?')
        if (isConfirm) {
            fetch(`http://localhost:5000/book/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        setBooks(books.filter(book => book._id !== id))
                    }

                })
        }
    }
    return (
        <div className='px-20 py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center '>
                {
                    myaddedBooks.map(book => <div key={book._id} className='border-2 border-red-400 bg-red-400 rounded-xl hover:shadow-2xl hover:shadow-black transition ease-in-out  hover:scale-105 grid grid-cols-2  duration-700'>
                        <div className='p-5'>
                            <img className='rounded-xl ' src={book.img} alt="" />
                        </div>

                        <div className='rounded-xl py-5'>
                            <h2 className='text-xl text-white'>{book.name}</h2>
                            <p className=' text-gray-200 font-sans text-justify px-5'>Overview: {book.des}
                            </p>

                            <h6 className='text-red-400 text-xl font-serif py-3'>Price : ${book.price}</h6>
                            <h6 className=' flex justify-between px-5 font-semibold text-gray-200 font-serif'>
                                <span className=''>Stock in : {book.quantity}</span>
                                <span>Supply by {book.sName}</span>
                            </h6>
                            <button className='bg-red-600 px-5 py-2 mt-5 rounded-full text-white' onClick={() => handleDelete(book._id)}>Delete</button>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default MyBooks;
import React from 'react';
import { Link } from 'react-router-dom';
import useAllBooks from '../../hooks/useAllbooks/useAllBooks';
import { AiFillDelete } from 'react-icons/ai'

const ManageAllbooks = () => {
    const [books, setBooks] = useAllBooks();

    const handleDelete = (id) => {
        const isConfirm = window.confirm('Are you want delete this book?')
        if (isConfirm) {
            fetch(`https://calm-reaches-89573.herokuapp.com/book/${id}`, {
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
        <div className='bg-red-200 px-10 md:px-20 py-24 h-full'>
            <p className='mb-5'><Link to='/addbook' className='bg-green-700 p-2 rounded text-white visible md:invisible'>Add New Book</Link></p>
            <div className='overflow-x-auto '>
                <table className='table-auto w-full border-collapse border border-white'>
                    <tr>
                        <th className='p-5 border border-white text-xl text-white bg-red-400'>Name</th>
                        <th className='p-5 border border-white text-xl text-white bg-red-400'>Supplier</th>
                        <th className='p-5 border border-white text-xl text-white bg-red-400'>Price</th>
                        <th className='p-5 border border-white text-xl text-white bg-red-400'>Quantity</th>
                        <th className='p-5 border border-white text-xl text-white bg-red-400'><Link to='/addbook' className='bg-green-700 p-2 rounded text-white invisible md:visible'>Add New Book</Link></th>
                    </tr>

                    {
                        books.map(book => <tr className='border border-white' key={book._id}>

                            <td className='py-5 px-2 text-lg'>{book.name}</td>
                            <td className='py-5 px-2  border border-white'>{book.sName}</td>
                            <td className='py-5 px-2  border border-white'>{book.price}</td>
                            <td className='py-5 px-2  border border-white'>{book.quantity}</td>
                            <td className='py-5 px-2  border border-white'><button onClick={() => handleDelete(book._id)} className='bg-red-300 text-2xl p-2 rounded text-red-600'><AiFillDelete /></button></td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageAllbooks;
import React from 'react';
import { Link } from 'react-router-dom';
import useAllBooks from '../../hooks/useAllbooks/useAllBooks';

const ManageAllbooks = () => {
    const [books, setBooks] = useAllBooks();

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
        <div className='bg-red-200 px-10 md:px-20 py-24 h-full'>
            <p className='mb-5'><Link to='/addbook' className='bg-green-700 p-2 rounded text-white visible md:invisible'>Add New Book</Link></p>
            <table className='table-auto w-full border-collapse border border-white'>
                <tr>
                    <th className='py-5 text-xl'>Name</th>
                    <th className='text-xl'>Supplier Name</th>
                    <th className='text-xl'>Price</th>
                    <th className='text-xl'>Quantity</th>
                    <th><Link to='/addbook' className='bg-green-700 p-2 rounded text-white invisible md:visible'>Add New Book</Link></th>
                </tr>

                {
                    books.map(book => <tr className='border border-white' key={book._id}>

                        <td className='py-5 px-2 text-lg'>{book.name}</td>
                        <td className='border border-white'>{book.sName}</td>
                        <td>{book.price}</td>
                        <td>{book.quantity}</td>
                        <td><button onClick={() => handleDelete(book._id)} className='bg-red-600 p-2 rounded text-white'>Delete</button></td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ManageAllbooks;
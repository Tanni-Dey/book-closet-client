import React from 'react';
import { Link } from 'react-router-dom';
import useAllBooks from '../../hooks/useAllbooks/useAllBooks';

const ManageAllbooks = () => {
    const [books, setBooks] = useAllBooks();
    return (
        <div className='bg-red-200 px-20 pt-24 h-screen'>
            <table className='table-auto w-full border-collapse border border-white'>
                <tr>
                    <th className='py-5 text-xl'>Name</th>
                    <th className='text-xl'>Supplier</th>
                    <th className='text-xl'>Price</th>
                    <th className='text-xl'>Quantity</th>
                </tr>

                {
                    books.map(book => <tr className='border border-white' key={book._id}>

                        <td className='py-5 px-2 text-lg'>{book.name}</td>
                        <td className='border border-white'>{book.sName}</td>
                        <td>{book.price}</td>
                        <td>{book.quantity}</td>
                        <td><button className='bg-red-600 p-2 rounded text-white'>Delete</button></td>
                        <td><Link to='/addbook' className='bg-green-700 p-2 rounded text-white'>Add Book</Link></td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ManageAllbooks;
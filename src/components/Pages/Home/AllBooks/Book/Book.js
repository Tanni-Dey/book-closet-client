import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const navigate = useNavigate()
    const { _id, name, des, price, quantity, img, sName } = book;
    const [show, setShow] = useState(false)
    return (
        <div className='bg-white rounded-xl p-5'>
            <div className='md:p-5'>
                <img className='rounded-xl hover:shadow-2xl hover:shadow-black transition ease-in-out  hover:scale-110  duration-700' src={img} alt="" />
            </div>

            <h4 className='text-xl text-red-400 font-serif my-5'>{name}</h4>
            <p className='text-gray-400 font-sans text-justify md:px-5'>Overview:  {
                show ? des : des.slice(0, 150)
            }
                {
                    <button className='text-red-400 underline ' onClick={() => setShow(!show)}>{show ? 'see less' : 'see more'}</button>
                }
            </p>

            <h6 className='text-red-400 text-xl font-serif py-3'>Price : ${price}</h6>
            <h6 className=' flex justify-between px-5 font-semibold text-gray-500 font-serif'>
                <span className=''>Stock in : {quantity}</span>
                <span>Supply by {sName}</span>
            </h6>
            <button onClick={() => navigate(`/book/${_id}`)} className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700' >Manage Book</button>
        </div>
    );
};

export default Book;
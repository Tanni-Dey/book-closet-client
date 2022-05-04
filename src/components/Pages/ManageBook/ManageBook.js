import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const ManageBook = () => {
    const { id } = useParams();
    const [singleBook, setSignleBook] = useState({});
    const { _id, name, des, price, quantity, img, sName } = singleBook;
    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(data => setSignleBook(data))
    }, [singleBook])

    const handleDelivered = () => {
        const updateQuantity = quantity - 1;
        const newQuantity = { updateQuantity }
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handlerestock = (event) => {
        event.preventDefault()
        const quantyValue = event.target.restock.value;
        const updateQuantity = Number(quantity) + Number(quantyValue);
        const newQuantity = { updateQuantity }
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset()
    }

    return (
        <div className='pt-24'>
            <h2 className='text-3xl text-red-400 font-serif mb-10'>{name}</h2>
            <div className='rounded-xl  w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center border-2 border-red-400 rounded-xl hover:shadow-2xl hover:shadow-black transition ease-in-out  hover:scale-105  duration-700'>
                <div className='p-5'>
                    <img className='rounded-xl ' src={img} alt="" />
                </div>

                <div className='rounded-xl '>{/* 
                    <h4 className='text-2xl text-red-400 font-serif my-5'>{name}</h4> */}
                    <p className=' text-gray-400 font-sans text-justify px-5'>Overview: {des}
                    </p>

                    <h6 className='text-red-400 text-xl font-serif py-3'>Price : ${price}</h6>
                    <h6 className=' flex justify-between px-5 font-semibold text-gray-500 font-serif'>
                        <span className=''>Stock in : {quantity}</span>
                        <span>Supply by {sName}</span>
                    </h6>
                    <button onClick={handleDelivered} className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>Delivered</button>
                    <form className='flex items-center justify-around px-5 fon-sans' onSubmit={handlerestock}>
                        <input className='p-2 focus:outline-red-300 rounded border-2' type="number" name="restock" placeholder='Restock' />
                        <input className='bg-red-400 p-2 rounded text-white' type="submit" value="Restock" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageBook;
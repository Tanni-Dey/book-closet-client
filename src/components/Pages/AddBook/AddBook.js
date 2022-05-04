import React from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(data)
        event.target.reset();
    };

    return (
        <div className='bg-red-200 px-20 py-24 h-full'>
            <div className='w-1/2 mx-auto'>
                <h3 className='font-serif text-3xl'>Add Book</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2 px-5 mt-5 focus:outline-red-300 rounded-full mb-2 w-full' {...register("name")} placeholder='Name' type='text' required />
                    <input className='py-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' {...register("img")} placeholder='Image-Url' type='text' required />
                    <input className='py-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' {...register("price")} placeholder='Price' type='number' required />
                    <input className='py-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' {...register("quantity")} placeholder='Quantity' type='number' required />
                    <input className='py-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' {...register("sName")} placeholder='Supplier Name' type='text' required />
                    <textarea rows="4" cols="50" className='py-2 px-5 focus:outline-red-300 rounded-xl mb-2 w-full' {...register("des")} placeholder='Description' type='text' required />
                    <input className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700' type="submit" value="Add Book" />
                </form>
            </div>
        </div>
    );
};

export default AddBook;
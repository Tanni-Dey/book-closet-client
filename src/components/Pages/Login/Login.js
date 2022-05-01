import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Social from '../../Shared/Social/Social';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-red-200 pt-40 h-screen grid grid-cols-1 md:grid-cols-2'>
            <div className='w-1/2 mx-auto'>
                <h3 className='font-serif text-3xl'>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2 px-5 mt-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Email' type='email' name='email' {...register("email")} required />
                    <input className='p-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Password' name='password' type='password' {...register("password")} required />
                    {/* {
                        error ? <p className='text-red-600'>{error?.message}</p> : ''
                    } */}
                    <input className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700' type="submit" value='Login' />
                </form>
                <p className='text-orange-900 text-xl'>Create An Account? <Link to='/signup'
                    className=" py-2 text-xl underline  text-red-400 "
                >
                    <span className="ml-2">Sign Up</span>
                </Link></p>
            </div>
            <div>
                <Social />
            </div>
        </div >
    );
};

export default Login;
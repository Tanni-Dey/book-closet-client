import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    useEffect(() => {
        if (loading) {
            <Loading />
        }
    })
    if (user) {
        navigate('/')
    }

    const handleSignup = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cpass = event.target.cpassword.value;

        if (password !== cpass) {
            return toast.error('Password not Matched with confirm password')
        }

        await createUserWithEmailAndPassword(email, password);
        toast.success('Sent Email')
        // await updateProfile({ displayName: name })
        event.target.reset()
    }

    return (
        <div className='bg-red-200 pt-40 h-screen grid grid-cols-1 md:grid-cols-2'>
            <div className='w-1/2 mx-auto'>
                <h3 className='font-serif text-3xl'>Sign Up</h3>
                <form onSubmit={handleSignup}>
                    <input className='p-2 mt-5 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Name' type='text' name='name' {...register("Name")} />
                    <input className='py-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Email' type='email' name='email' {...register("email")} required />
                    <input className='p-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Password' name='password' type='password' {...register("password")} required />
                    <input className='p-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Confirm Password' type='password' name='cpassword' required />
                    {
                        error ? <p className='text-red-600'>{error?.message}</p> : ''
                    }
                    <input className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700' type="submit" value='Sign Up' />
                </form>
                <p className='text-orange-900 text-xl'>Already Have An Account? <Link to='/login'
                    className=" py-2 text-xl underline  text-red-400 "
                >
                    <span className="ml-2">Login</span>
                </Link></p>
            </div>
            <div>
                <Social />
            </div>
        </div >
    );
};

export default SignUp;
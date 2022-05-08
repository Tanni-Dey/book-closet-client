import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if (googleLoading || gitLoading) {
        <Loading />
    }
    useEffect(() => {
        if (googleError) {
            toast.error(googleError?.message)
        }

    }, [googleError])

    useEffect(() => {
        if (gitError) {
            toast.error(gitError?.message)
        }

    }, [gitError])

    if (googleUser || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='flex items-center justify-center py-5 md:hidden'>
                <hr className='w-1/3' />
                <div className='px-3'>or</div>
                <hr className='w-1/3' />
            </div>
            <h2 className='font-serif text-xl'>Sign Up with Social Media</h2>
            <button onClick={() => signInWithGoogle()} className='flex items-center font-serif md:w-1/2 mx-auto justify-center text-xl text-white bg-red-700 rounded-3xl px-10 py-2 my-5 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'><FcGoogle className='mr-5' /> Google</button>
            <button onClick={() => signInWithGithub()} className='flex items-center font-serif md:w-1/2 mx-auto justify-center text-xl text-white bg-black rounded-3xl px-10 py-2 my-5 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'><BsGithub className='mr-5' /> Github</button>
        </div>
    );
};

export default Social;
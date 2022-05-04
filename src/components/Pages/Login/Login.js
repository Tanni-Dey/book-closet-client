import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)

    useEffect(() => {
        if (loading || sending) {
            <Loading />
        }
    })

    if (user) {
        // navigate('/')
        navigate(from, { replace: true });
    }


    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {

            await sendPasswordResetEmail(email)
            toast.success('Sent Email')
        }
        else {
            toast('Please give your Email')

        }
    }

    return (
        <div className='bg-red-200 pt-40 h-screen grid grid-cols-1 md:grid-cols-2'>
            <div className='w-1/2 mx-auto'>
                <h3 className='font-serif text-3xl'>Login</h3>
                <form onSubmit={handleLogin}>
                    <input className='py-2 px-5 mt-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Email' type='email' ref={emailRef} name='email' required />
                    <input className='p-2 px-5 focus:outline-red-300 rounded-full mb-2 w-full' placeholder='Your Password' name='password' type='password' ref={passRef} required />
                    {
                        error ? <p className='text-red-600'>{error?.message}</p> : ''
                    }
                    <input className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700' type="submit" value='Login' />
                </form>
                <p className='text-orange-900 text-xl'>Create An Account? <Link to='/signup'
                    className=" py-2 text-xl underline  text-red-400 ">Sign Up</Link></p>

                <p className='text-orange-900 text-xl'>Forget Password? <button onClick={handleReset} className=" py-2 text-xl underline  text-red-400 " >
                    Reset Password
                </button></p>
                {
                    resetError ? <p>{resetError.message}</p> : ''
                }
            </div>
            <div>
                <Social />
            </div>
        </div >
    );
};

export default Login;
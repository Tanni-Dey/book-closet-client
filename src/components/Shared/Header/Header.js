import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsListNested } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi'
const Header = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className='text-xl absolute top-0 z-50 left-0 right-0'>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-transparent top-0">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/'
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-400"
                        >
                            <span className=' flex items-center gap-2'><GiOpenBook className='text-xl' />Book Closet</span>
                        </Link>
                        <button
                            className="text-red-400 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        ><BsListNested />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center text-red-400" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/'
                                    className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login'
                                    className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup'
                                    className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">Sign Up</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Header;
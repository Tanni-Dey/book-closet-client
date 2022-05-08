import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { BsListNested } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [navbarOpen, setNavbarOpen] = useState(false);

    let activeStyle = {
        color: "white"
    };

    return (
        <div className='text-xl absolute top-0 z-50 left-0 right-0'>
            <nav style={{ background: useLocation().pathname !== "/" ? "#FECACA" : "transparent" }} className="relative flex flex-wrap items-center justify-between px-2 py-5 top-0">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to='/'
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-400"
                        >
                            <span className={`${useLocation().pathname !== "/" ? "flex" : "hidden"} md:flex items-center gap-2`}><GiOpenBook className='text-xl' />Book Closet</span>
                        </NavLink>
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
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to='/'
                                    className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to='/about'
                                    className="px-3 py-2 flex items-center text-xl  font-semibold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">About</span>
                                </NavLink>
                            </li>
                            {
                                user ? <li className="nav-item">
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/allbooks'
                                        className="px-3 py-2 flex items-center text-xl  font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">Manage Books</span>
                                    </NavLink>
                                </li> : ''
                            }
                            {
                                user ? <li className="nav-item">
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/addbook'
                                        className="px-3 py-2 flex items-center text-xl  font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">Add Book</span>
                                    </NavLink>
                                </li> : ''
                            }
                            {
                                user ? <li className="nav-item">
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/mybooks'
                                        className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">My Books</span>
                                    </NavLink>
                                </li> : ''
                            }
                            <li className="nav-item">
                                {
                                    user ? <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } onClick={() => signOut(auth)} to='/login'
                                        className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">Logout</span>
                                    </NavLink> : <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/login'
                                        className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">Login</span>
                                    </NavLink>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    !user ? <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/signup'
                                        className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                    >
                                        <span className="ml-2">Sign Up</span>
                                    </NavLink> : ''
                                }
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to='/blogs'
                                    className="px-3 py-2 flex items-center text-xl font-semibold leading-snug text-red-400 hover:opacity-75"
                                >
                                    <span className="ml-2">Blogs</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Header;
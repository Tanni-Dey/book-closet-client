import React from 'react';
import { TiLocationArrowOutline } from 'react-icons/ti'
import { MdAlternateEmail } from 'react-icons/md'
import { BsTelephone, BsInstagram } from 'react-icons/bs'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='px-20 py-10 bg-black text-gray-200 font-serif'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-left'>
                <div>
                    <h4 className='text-xl mb-5  text-red-400'>Contact Us</h4>
                    <hr className='mb-10' />
                    <ul>
                        <li className='mb-4 flex items-center'><TiLocationArrowOutline className='text-2xl mr-3' /> <span>1998 Wall Street 707,<br /> Washington DC, USA</span></li>
                        <li className='mb-4 flex items-center'><MdAlternateEmail className='text-2xl mr-3' /><span>boobcloset@gmail.com<br />support@gmail.com</span></li>
                        <li className='mb-4 flex items-center'><BsTelephone className='text-2xl mr-3' /><span>( 84) 0123 456 789<br />( 84) 00123 456 789</span></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl mb-5   text-red-400'>Information</h4>
                    <hr className='mb-10' />
                    <ul>
                        <li className='mb-4'>Home</li>
                        <li className='mb-4'>About Us</li>
                        <li className='mb-4'>Blogs</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl mb-5  text-red-400'>My Account</h4>
                    <hr className='mb-10' />
                    <ul>
                        <li className='mb-4'>Manage items</li>
                        <li className='mb-4'>My items</li>
                        <li className='mb-4'>Sign Up</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl mb-5  text-red-400'>Social</h4>
                    <hr className='mb-10' />
                    <p className='flex items-center gap-3 text-xl '>  <span className='hover:text-red-400'><FiFacebook /></span>
                        <span className='hover:text-red-400'><BsInstagram /></span>
                        <span className='hover:text-red-400'><AiOutlineLinkedin /></span>
                        <span className='hover:text-red-400'><FiTwitter /></span>


                    </p>
                </div>
            </div>
            <div>
                <p className='text-gray-400 pt-5'>Copyright © 2022 Book Closet - Made by Tanni</p>
            </div>
        </div>
    );
};

export default Footer;
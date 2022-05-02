import React from 'react';

const Bestbook = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-40 m-20 items-center font-sans'>
            <div className='text-left'>
                <h5 className='font-serif text-xl text-gray-700 uppercase'>Best Selling Book</h5>
                <h2 className='text-6xl pt-5 text-red-400 uppercase font-sans'>Stock Market Investing</h2>
                <p className='text-red-300'>by Willium L. Anderson</p>
                <h4 className='text-red-400 text-3xl py-3'>$25</h4>
                <p className='text-lg font-normal text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className='text-white bg-red-400 rounded-3xl px-5 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
            </div>
            <div>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574680885i/48943405._UY500_SS500_.jpg" alt="" />
            </div>
        </div>
    );
};

export default Bestbook;
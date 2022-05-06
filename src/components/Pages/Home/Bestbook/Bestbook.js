import React from 'react';

const Bestbook = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-between my-20 px-20 items-center font-sans'>
            <div className='text-left'>
                <h5 className='font-serif text-xl text-gray-700 uppercase'>Best Selling Book</h5>
                <h2 className='text-6xl pt-5 text-red-400 uppercase font-sans'>Stock Market Investing</h2>
                <p className='text-red-300'>by Willium L. Anderson</p>
                <h4 className='text-red-400 text-3xl py-3'>$25</h4>
                <p className='text-lg font-normal text-gray-400'>This book provides a good foundation for the beginning investor who is setting out to venture in the stock market. It tells you in plain English about the fundamentals of stock market and investment strategies to deepen your investing literacy. If you're looking for good advice on which stock to buy and when to sell it, you can find it in this book."—Best Ways to Invest Money Blog.Investing in the stock market is a great way to build your wealth, but for those of us who aren't professional stockbrokers, knowing what information to trust and where to put your money can seem overwhelming. Stock Market Investing for Beginners provides you with the strategic advice and knowledge necessary to make informed investment decisions. </p>
                <button className='text-white bg-red-400 rounded-3xl px-5 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
            </div>
            <div >
                <img className='w-full' src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574680885i/48943405._UY500_SS500_.jpg" alt="" />
            </div>
        </div>
    );
};

export default Bestbook;
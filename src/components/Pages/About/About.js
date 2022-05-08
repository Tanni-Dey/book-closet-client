import React from 'react';
import Header from '../../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className='px-10 md:px-20 pt-10 md:pt-16 pb-20'>
                <h2 className='text-4xl mx-auto my-16 md:my-20 font-serif '>About Us</h2>
                <div className=' grid grid-cols-1 gap-10 md:gap-20 items-center md:grid-cols-2'>
                    <div>
                        <img className='rounded-xl' src="https://demo2wpopal.b-cdn.net/bookory/wp-content/uploads/2022/02/About_03.png" alt="" />
                    </div>
                    <div className='text-left'>
                        <h3 className='text-xl text-red-400 font-sans '>Warehouse for Good</h3>
                        <h2 className='text-3xl text-red-400 font-serif py-5'>Book Closet is Best Online Warehouse Website
                        </h2>
                        <p className='text-justify'>This is a book warehouse website. It has 100+ books. User can signup with social login or email password login. After login he/she can add many books in this website and show this books manage books page and my books page. Upcomming book section has see in home page.</p>
                        <button className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
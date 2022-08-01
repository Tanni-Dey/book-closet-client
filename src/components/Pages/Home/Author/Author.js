import React from 'react';
import { ImLinkedin2, ImFacebook, ImTwitter } from 'react-icons/im'
import { GrGooglePlus } from 'react-icons/gr'

const Author = () => {
    const allAuthor = [
        { name: 'Poulomi', books: 'Art-Fashion, Broken-Silence', img: 'https://media.istockphoto.com/photos/beautiful-african-american-woman-holding-red-book-looking-at-window-picture-id1326638534?b=1&k=20&m=1326638534&s=170667a&w=0&h=jf4-bTedkK69Xp7E3vpO0LSmpH3aMuJbWR_dd5sWJpU=', bookNumber: '2' },
        { name: 'Smith', books: 'Art-Fashion, Broken-Silence', img: 'https://media.istockphoto.com/photos/beautiful-african-american-woman-holding-red-book-looking-at-window-picture-id1326638534?b=1&k=20&m=1326638534&s=170667a&w=0&h=jf4-bTedkK69Xp7E3vpO0LSmpH3aMuJbWR_dd5sWJpU=', bookNumber: '3' },
        { name: 'Arjo', books: 'Art-Fashion, Broken-Silence', img: 'https://media.istockphoto.com/photos/beautiful-african-american-woman-holding-red-book-looking-at-window-picture-id1326638534?b=1&k=20&m=1326638534&s=170667a&w=0&h=jf4-bTedkK69Xp7E3vpO0LSmpH3aMuJbWR_dd5sWJpU=', bookNumber: '5' },
    ]
    return (
        <div className='pt-10 md:pt-20 pb-20 px-10 md:px-20 bg-gray-200'>
            <h2 className='text-3xl font-serif text-red-400'>Featured Author</h2>
            <div className='grid grid-cols-1 gap-10 mt-10 md:mt-20 md:grid-cols-3'>
                {
                    allAuthor.map(author =>
                        <div className='bg-white rounded-xl p-5'>
                            <div className='md:px-5 md:py-1'>
                                <img className='rounded-xl hover:shadow-2xl hover:shadow-black transition ease-in-out  hover:scale-110  duration-700' src={author.img} alt="" />
                            </div>

                            <h4 className='text-xl text-left px-5 text-red-400 font-serif'>{author.name}</h4>

                            <h6 className='text-gray-400 text-left px-5 text-md font-serif'>{author.bookNumber} Published Book</h6>
                            <h6 className=' flex mt-5  px-5 font-semibold text-gray-500 font-serif'>
                                <span className='hover:bg-red-400 hover:text-white mx-1 border-2 border-red-400 p-1 rounded-lg'><ImFacebook /></span>
                                <span className='hover:bg-red-400 hover:text-white mx-1 border-2 border-red-400 p-1 rounded-lg'><ImLinkedin2 /></span>
                                <span className='hover:bg-red-400 hover:text-white mx-1 border-2 border-red-400 p-1 rounded-lg'><ImTwitter /></span>
                                <span className='hover:bg-red-400 hover:text-white mx-1 border-2 border-red-400 p-1 rounded-lg'><GrGooglePlus /></span>
                            </h6>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default Author;
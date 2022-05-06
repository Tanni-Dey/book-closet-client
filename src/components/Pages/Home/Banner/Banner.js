import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
                <div
                    className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
                >
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <video className="w-full brightness-50" playsInline autoPlay loop muted>
                            <source src="https://st4.depositphotos.com/29364172/37755/v/600/depositphotos_377559820-stock-video-books-notebooks-shelf-child.mp4" type="video/mp4" />
                        </video>
                        <div className="carousel-caption md:block absolute md:bottom-1/3  text-center">
                            <h5 className="text-xl lg:text-8xl md:text-4xl font-serif font-bold">Welcome to Closet</h5>
                            <p className='md:text-xl'>To build Book Closet, we need 100 of book records</p>
                            <button className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <video className="w-full brightness-50" playsInline autoPlay loop muted>
                            <source src="https://st4.depositphotos.com/1022914/24540/v/600/depositphotos_245409466-stock-video-pile-of-books-on-anaesthesiology.mp4" type="video/mp4" />
                        </video>
                        <div className='bg-black w-full'>
                            <div className="carousel-caption md:block absolute   md:bottom-1/3 text-center">
                                <h5 className="text-xl lg:text-8xl md:text-4xl font-serif font-bold">Reading Books</h5>
                                <p className='md:text-xl lg:pt-5'>This is Best website for know about Books</p>
                                <button className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <video className="w-full brightness-50" playsInline autoPlay loop muted>
                            <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SScGOMwcgizu1231h/videoblocks-classic-library-with-old-globe_sxjacgqqe__89dd9830cd0f6485590b1fe4626afaae__P360.mp4" type="video/mp4" />
                        </video>
                        <div className="carousel-caption md:block absolute  md:bottom-1/3 text-center">
                            <h5 className="text-xl md:text-6xl lg:text-8xl font-serif font-bold">Online Books</h5>
                            <p className='md:text-xl'>Book Closet is a project of the non-profit Internet Archive</p>
                            <button className='text-white bg-red-400 rounded-3xl px-10 py-2 my-5 border-2 border-red-400 drop-shadow-xl  transition ease-in-out  hover:scale-110  duration-700'>See More</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
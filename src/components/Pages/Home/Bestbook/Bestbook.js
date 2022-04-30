import React from 'react';

const Bestbook = () => {
    return (
        <div className='grid grid-col-2'>
            <div>
                <h5>Best Selling Book</h5>
                <h2>Stock Market Investing</h2>
                <p>by Willium L. Anderson</p>
                <h4>$25</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button>See More</button>
            </div>
            <div>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574680885i/48943405._UY500_SS500_.jpg" alt="" />
            </div>
        </div>
    );
};

export default Bestbook;
import React from 'react';

const UpcommingSingle = ({ book }) => {
    const { name, discount, id, img } = book;
    return (
        <div>
            <div className='h-44 rounded-xl' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'black' }}>
                <span className='text-red-400 text-xl font-serif p-4 bg-red-200 rounded-3xl'>{name}</span>
                <h4 className='mt-2'><span className='text-red-200 text-xs font-sans rounded-3xl bg-black p-3 '>{discount} off</span></h4>
            </div>
        </div>
    );
};

export default UpcommingSingle;
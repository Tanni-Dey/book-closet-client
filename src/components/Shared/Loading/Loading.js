import React from 'react';
import loading from '../../../imges/loading.gif'

const Loading = () => {
    return (
        <div>
            <div className="my-40 rounded-md p-4 max-w-sm w-full mx-auto">
                <div className='w-1/5 mx-auto'>
                    <img src={loading} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming/Upcoming'
import Bestbook from '../Bestbook/Bestbook'

const Home = () => {
    return (
        <div>
            <Banner />
            <Bestbook />
            <Upcoming />
        </div>
    );
};

export default Home;
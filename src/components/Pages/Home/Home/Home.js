import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming/Upcoming'
import Bestbook from '../Bestbook/Bestbook'
import AllBooks from '../AllBooks/Allbooks/AllBooks';

const Home = () => {
    return (
        <div>
            <Banner />
            <AllBooks />
            <Bestbook />
            <Upcoming />
        </div>
    );
};

export default Home;
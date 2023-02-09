import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming/Upcoming'
import Bestbook from '../Bestbook/Bestbook'
import AllBooks from '../AllBooks/Allbooks/AllBooks';
import Loading from '../../../Shared/Loading/Loading'
import useAllBooks from '../../../hooks/useAllbooks/useAllBooks'
import Author from '../Author/Author';
import Gift from '../Gift/Gift';

const Home = () => {
    const [books, setBooks] = useAllBooks()

    return (
        <div>
            <Banner />
            <AllBooks />
            <Bestbook />
            <Upcoming />
            <Author />
            <Gift />
        </div>
    );
};

export default Home;
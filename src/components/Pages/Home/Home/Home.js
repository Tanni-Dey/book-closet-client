import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming/Upcoming'
import Bestbook from '../Bestbook/Bestbook'
import AllBooks from '../AllBooks/Allbooks/AllBooks';
import Loading from '../../../Shared/Loading/Loading'
import useAllBooks from '../../../hooks/useAllbooks/useAllBooks'

const Home = () => {
    const [books, setBooks] = useAllBooks()

    if (books.length === 0) {
        return <Loading />
    }

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
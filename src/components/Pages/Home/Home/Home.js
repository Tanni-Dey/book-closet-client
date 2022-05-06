import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming/Upcoming'
import Bestbook from '../Bestbook/Bestbook'
import AllBooks from '../AllBooks/Allbooks/AllBooks';
import Loading from '../../../Shared/Loading/Loading'

const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);

    if (spinner) {
        return <Loading />
    }

    return (
        !spinner &&
        <div>
            <Banner />
            <AllBooks />
            <Bestbook />
            <Upcoming />
        </div>
    );
};

export default Home;
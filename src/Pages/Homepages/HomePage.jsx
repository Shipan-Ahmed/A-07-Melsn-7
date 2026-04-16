import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Banner from '../../Components/Banner';
import Friends from '../../Components/Friends';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    // const dataLoad = useLoaderData();
    // console.log(dataLoad);
    return (
        <section className='max-w-9/12 mx-auto mb-20'>
            <Banner></Banner>
            <Friends></Friends>
        </section>
    );
};

export default HomePage;
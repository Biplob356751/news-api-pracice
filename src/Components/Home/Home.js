import React from 'react';
import Banner from './../Banner/Banner';
import Blog from './../Blog/Blog';

const Home = () => {
    return (
        <div className='home_page'>
            <Banner></Banner>
            <Blog></Blog>
        </div>
    );
};

export default Home;
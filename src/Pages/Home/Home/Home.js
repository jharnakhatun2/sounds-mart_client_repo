import React from 'react';
import Advertise from '../../Advertise/Advertise';
import Banner from '../../Banner/Banner';
import Newsletter from '../../Newsletter/Newsletter';
import Category from '../../Products/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
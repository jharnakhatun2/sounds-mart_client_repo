import React from 'react';
import Advertise from '../../Advertise/Advertise';
import Banner from '../../Banner/Banner';
import Newsletter from '../../Newsletter/Newsletter';
import Category from '../../Products/Category';
import { Features } from '../../Features/Features';
import { VideoHeadphone } from '../../VideoHeadphone/VideoHeadphone';
import { TopProducts } from '../../TopProducts/TopProducts';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Category></Category>
            <TopProducts></TopProducts>
            <Advertise></Advertise>
            <VideoHeadphone></VideoHeadphone>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
import React from 'react';
import Advertise from '../../Advertise/Advertise';
import Banner from '../../Banner/Banner';
import Newsletter from '../../Newsletter/Newsletter';
import Category from '../../Products/Category';
import { Features } from '../../Features/Features';
import { VideoHeadphone } from '../../VideoHeadphone/VideoHeadphone';
import { TopProducts } from '../../TopProducts/TopProducts';
import { BuyingGuide } from '../../BuyingGuide/BuyingGuide';
import { Review } from '../../Review/Review';
import { Contact } from '../../Contact/Contact';
import { PricingTable } from '../../PricingTable/PricingTable';
import { Galary } from '../../Galary/Galary';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Category></Category>
            <TopProducts></TopProducts>
            <BuyingGuide></BuyingGuide>
            <Advertise></Advertise>
            <VideoHeadphone></VideoHeadphone>
            <Galary></Galary>
            <PricingTable></PricingTable>
            <Newsletter></Newsletter>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;
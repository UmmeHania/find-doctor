import React from 'react';
import Footer from '../Shared/Footer';
import Testimonials from '../Testimonials';
import Care from './Care';
import Info from './Info';

import Landing from './Landing';
import MakeAppointment from './MakeAppointment';
import Newsletter from './Newsletter';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Landing></Landing>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;
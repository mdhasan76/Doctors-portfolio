import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import OurServices from './ourSerices/OurServices';
import Teleus from './Teleus';
import Terms from './Terms';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <Teleus />
            <OurServices />
            <Terms />
            <Appoinment />
            <Testimonial />
        </div>
    );
};

export default Home;
import React from 'react';
import teeth from '../../../assets/images/whitening.png'
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import OurServiceCard from './OurServiceCard';
const OurServices = () => {
    const services = [
        {
            id: 1,
            img: floride,
            title: "Flouride Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia."
        },
        {
            id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia."
        },
        {
            id: 3,
            img: teeth,
            title: "Teeth Whitening",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quia."
        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center mb-16'>
                <h3 className='text-primary font-bold'>OUR SERVICES</h3>
                <p className='text-3xl'>Serivces We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5'>
                {
                    services.map(service => <OurServiceCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default OurServices;
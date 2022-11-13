import React from 'react';

const OurServiceCard = ({ service }) => {
    const { img, description, title } = service;
    return (
        <div className='p-10 shadow-lg rounded-lg'>
            <figure className='flex justify-center'>
                <img src={img} alt="" />
            </figure>
            <div className='pt-7'>
                <p className='font-medium text-lg mb-2'>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurServiceCard;
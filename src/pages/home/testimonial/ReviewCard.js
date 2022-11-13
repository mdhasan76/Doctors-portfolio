import React from 'react';

const ReviewCard = ({ review }) => {
    const { description, img, name, country } = review;
    return (
        <div className='shadow-xl p-8 rounded-lg'>
            <p className='mb-5'>{description}</p>
            <div className='flex items-center'>
                <img src={img} className="ring-4 rounded-full" alt="" />
                <div className='pl-3'>
                    <p className='text-lg font-bold'>{name}</p>
                    <p className='text-sm opacity-80 font-semibold'>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
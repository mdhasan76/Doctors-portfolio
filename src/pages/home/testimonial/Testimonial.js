import React from 'react';
import qutes from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            img: people1,
            name: "Hasan",
            country: "Bangladesh",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            img: people1,
            name: "Robin",
            country: "Riyad",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            img: people1,
            name: "Kawser",
            country: "Jedda",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <div className='mb-10'>
            <div className='mb-16 text-center sm:text-left sm:flex justify-between items-center'>
                <div className='mb-3'>
                    <h3 className='text-primary font-bold'>TESTIMOIAL</h3>
                    <p className='text-3xl'>What our Pataints Says</p>
                </div>
                <div className='flex justify-center'>
                    <img src={qutes} className="h-40" alt="" />
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewCard key={review.id}
                        review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;
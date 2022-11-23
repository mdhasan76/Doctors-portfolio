import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';



const stripePromise = loadStripe(process.env.REACT_APP_strip_key);

const BookingPayment = () => {
    const bookingData = useLoaderData();
    // console.log(bookingData)
    return (
        <div>
            <h3 className='text-3xl  text-center my-5'>You are going to Payment for <span className='font-bold'>{bookingData.treatment}</span></h3>
            <div className='w-2/4 mx-auto border shadow-lg p-5'>
                <Elements stripe={stripePromise}>
                    {/* <CheckOutForm bookingData={bookingData} /> */}
                    <Checkout bookingData={bookingData} />
                </Elements>
            </div>
        </div>
    );
};

export default BookingPayment;
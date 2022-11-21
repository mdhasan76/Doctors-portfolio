import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe(`${process.env.REACT_APP_strip_key}`);

const BookingPayment = () => {
    const [bookingData, setBookingData] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/payment/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
            })
    }, [id])
    return (
        <div>
            <h3 className='text-3xl  text-center my-5'>You are going to Payment for <span className='font-bold'>{bookingData.treatment}</span></h3>
            <div className='w-2/4 mx-auto border shadow-lg p-5'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm bookingData={bookingData} />
                </Elements>
            </div>
        </div>
    );
};

export default BookingPayment;
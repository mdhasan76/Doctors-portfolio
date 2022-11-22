import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const Checkout = ({ bookingData }) => {
    const [cardErr, setCardErr] = useState('')
    const stripe = useStripe();
    const elements = useElements();


    //distructure data 
    const { price, email, pataintName, treatment, _id } = bookingData;

    //card data submit 
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handle submit a click korso')

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardErr(error.message)
        } else {
            setCardErr('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-500 mt-5'>{cardErr}</p>
                <button type="submit" className='btn btn-sm btn-primary mt-3 text-white' disabled={!stripe}>
                    Pay
                </button>
            </form>

        </div>
    );
};

export default Checkout;
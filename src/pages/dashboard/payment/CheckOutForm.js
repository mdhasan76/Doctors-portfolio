import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const CheckOutForm = ({ bookingData }) => {

    const [clientSecret, setClientSecret] = useState("");
    const [err, setErr] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, pataintName, treatment, email } = bookingData;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            setErr(error.message)
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: pataintName,
                        email: email,
                        service_name: treatment
                    },
                },
            },
        );

        if (confirmError) {
            setErr(confirmError.message)
            return
        }
        console.log(paymentMethod)
    }


    return (
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
            <p className='mt-5 text-red-500'>{err}</p>
            <button type="submit" className='btn btn-primary text-white mt-3' disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;
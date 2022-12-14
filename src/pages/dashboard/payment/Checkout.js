import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'

const Checkout = ({ bookingData }) => {
    const [cardErr, setCardErr] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transitionId, setTransitionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    //distructure data 
    const { price, email, pataintName, treatment, _id } = bookingData;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-mdhasan76.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
            });
    }, [price]);

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

        const { paymentIntent, error: confirmError } = await
            stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: pataintName,
                            email: email
                        },
                    },
                },
            );

        if (confirmError) {
            setCardErr(confirmError.message)
            return;
        }

        if (paymentIntent.status === "succeeded") {
            setTransitionId(paymentIntent.id)
            setSuccess("Your Payment is Successfully paid");
            console.log('after clear', transitionId, success)
            console.log(paymentIntent)
            const paymentObj = {
                success: success,
                transitionId: transitionId,
                email: email,
                bookingId: _id
            }
            paymentFetch(paymentObj)
                .then(data => {
                    if (data.acknowledged) {
                        console.log(data, paymentObj)
                        toast.success("Payment sucessFull")
                    }
                })
                .catch(err => {
                    toast.error(err.message)
                    console.log(err)
                })
        }
        console.log('before clear', success, transitionId)
        // console.log("error focuse last line", paymentIntent)
    }

    const paymentFetch = async (value) => {
        const url = 'https://doctors-portal-server-mdhasan76.vercel.app/paymentConfirm'
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        });
        const data = await res.json();
        return data;

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
                <button type="submit" className='btn btn-sm btn-primary mt-3 text-white' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <div className='py-3'>
                <p>{success}</p>
                <p className='font-bold'>{transitionId}</p>
            </div>
        </div>
    );
};

export default Checkout;
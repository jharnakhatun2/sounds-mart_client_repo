import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../../Pages/CheckOut/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Checkout = () => {
    const bookingData = useLoaderData();
    console.log(bookingData);
    return (
        <div className="m-5">
            <h2 className="text-2xl">Payment for :  {bookingData.product_name}</h2> 
            <h2 className="text-xl ">Please pay <strong>${bookingData.price}</strong> for this booking product </h2>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;
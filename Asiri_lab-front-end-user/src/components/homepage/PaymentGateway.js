import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

function PaymentGateway() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error: methodError } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (methodError) {
      console.log(methodError);
      setIsLoading(false);
      return;
    }

    try {
      // Call your backend to create the PaymentIntent
      const { data } = await axios.post('/api/appointments/book', {
        // Include necessary data for appointment
        amount: 100, // Example amount, fetch the actual amount from your form
        // Include other form data
      });

      const { clientSecret } = data;

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        console.log(confirmError);
        setIsLoading(false);
        return;
      }

      // Payment succeeded, call your backend to finalize the appointment
      console.log(paymentIntent);
      alert('Payment successful! Appointment booked.');
    } catch (error) {
      console.error(error);
      alert('Payment failed');
    }

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Payment Portal</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg p-6">
        <CardElement />
        <button type="submit" disabled={!stripe || isLoading} className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg focus:outline-none">
          {isLoading ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
}

export default PaymentGateway;

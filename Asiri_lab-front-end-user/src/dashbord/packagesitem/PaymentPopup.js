import React, { useState, useEffect } from 'react';

function PaymentPopup({ pkg, onClose }) {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const calculatePayment = () => {
      // Perform calculations and update paymentAmount, startDate, and endDate states
      setPaymentAmount(pkg.price);
      setStartDate(new Date().toLocaleDateString('en-US'));

      const endDateObj = new Date();
      endDateObj.setMonth(endDateObj.getMonth() + 1); // Add one month to the current date
      setEndDate(endDateObj.toLocaleDateString('en-US'));
    };

    calculatePayment();
  }, [pkg]);

  const handleSubscribe = async () => {
    const token = localStorage.getItem('usersdatatoken');
  
    try {
      const response = await fetch('/subscriptions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          packageId: pkg._id,
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        // Subscription successful, close the payment pop-up box
        onClose();
      } else {
        // Handle error response
        console.log(data.message);
        // Display an error message to the user or handle the error appropriately
      }
    } catch (error) {
      console.log(error);
      // Display an error message to the user or handle the error appropriately
    }
  };
  

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="mb-4">
          You have selected <strong>{pkg.name}</strong> package.
        </p>
        <p className="mb-4">Payment Amount: ${paymentAmount}</p>
        <p className="mb-4">Start Date: {startDate}</p>
        <p className="mb-4">End Date: {endDate}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSubscribe}>
          Subscribe
        </button>
        <button className="ml-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <span className="sr-only">Close</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 14.293 4.293a1 1 0 1 0-1.414-1.414L10 6.586 5.707 2.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 0 0 1.414 1.414L10 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PaymentPopup;

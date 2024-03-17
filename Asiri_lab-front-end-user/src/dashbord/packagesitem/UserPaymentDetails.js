//not use page
import React, { useEffect, useState } from 'react';

const UserPaymentDetails = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    fetchPaymentDetails();
  }, []);

  const fetchPaymentDetails = async () => {
    try {
      const response = await fetch(`/payment/details`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('usersdatatoken'),
        },
      });
      const data = await response.json();
      const updatedPaymentDetails = data.data.map(payment => {
        const paymentDate = new Date(payment.paymentDate);
        const month = paymentDate.toLocaleString('en-US', { month: 'long' });
        return { ...payment, month };
      });
      setPaymentDetails(updatedPaymentDetails);
    } catch (error) {
      console.error('Error fetching payment details:', error);
    }
  };

  const getStatusColor = status => {
    if (status === 'paid') {
      return 'bg-green-500 text-white'; // Green color for paid status
    } else if (status === 'unpaid') {
      return 'bg-red-500 text-white'; // Red color for unpaid status
    } else {
      return ''; // Default color
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paymentDetails.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-4">Package Details</h2>
      {currentItems.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Package</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Payment Date</th>
              <th className="px-4 py-2">Payment Month</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(payment => (
              <tr key={payment.paymentId}>
                <td className="border px-4 py-2">{payment.paymentId}</td>
                <td className="border px-4 py-2">{payment.package}</td>
                <td className="border px-4 py-2">{payment.amount}</td>
                <td className={`border px-4 py-2 ${getStatusColor(payment.paymentStatus)}`}>
                  {payment.paymentStatus}
                </td>
                <td className="border px-4 py-2">{payment.paymentDate}</td>
                <td className="border px-4 py-2">{payment.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment details available.</p>
      )}

      {/* Pagination */}
      {paymentDetails.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex items-center bg-white">
                {/* background clour default gary im changed white : seneth */}
              {Array.from({ length: Math.ceil(paymentDetails.length / itemsPerPage) }).map((_, index) => (
                <li key={index}>
                  <button
                    className={`py-1 px-3 mx-1 rounded ${
                      currentPage === index + 1 ? 'bg-blue-300 text-white' : 'bg-blue-400 text-white'
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default UserPaymentDetails;

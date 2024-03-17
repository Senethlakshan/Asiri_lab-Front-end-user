import React, { useState, useEffect } from 'react';

function SubscriptionHistory() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptionHistory = async () => {
      try {
        const response = await fetch(`/subscriptions/history`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('usersdatatoken'),
          },
        });
        const data = await response.json();
        setSubscriptions(data.subscriptions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubscriptionHistory();
  }, []);

  return (
    <div>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Package Name</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription._id}>
              <td className="border border-gray-300 p-2">{subscription.package && subscription.package.name}</td>
              <td className="border border-gray-300 p-2">{new Date(subscription.startDate).toLocaleDateString('en-US')}</td>
              <td className="border border-gray-300 p-2">{new Date(subscription.endDate).toLocaleDateString('en-US')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscriptionHistory;

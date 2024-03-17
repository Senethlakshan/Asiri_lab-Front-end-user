import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { ClipLoader } from "react-spinners";

function Userqr() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const generateQRCode = async () => {
    try {
        const response = await fetch(`/user/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('usersdatatoken'),
            },
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        setUserData(data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    generateQRCode();
  }, []);

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen font-bold">
            <ClipLoader size={50} color="#FFFFFF" loading={isLoading} />
        </div>
    );
}

if (error) {
    return <div className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-4 rounded-md'>
    <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pl-1 rounded-lg'>
        BMI Information
    </h1>
    <div>Error loading user data: {error.message}</div>
</div>
}

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-1 rounded-md">
        <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center pr-5 rounded-lg">
          Your QR Code
        </h1>
        <div className="ml-20 mb-2">
          {userData && <QRCode value={JSON.stringify(userData)} size={222} />}
        </div>
      </div>
    </>
  );
}

export default Userqr;

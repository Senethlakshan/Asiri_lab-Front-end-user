import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UserBMIcal = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bmi, setBMI] = useState(null);
    const [healthInfo, setHealthInfo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
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
        fetchData();
    }, []);

    useEffect(() => {
        if (userData) {
            const bmiValue = (userData.weight / ((userData.height / 100) ** 2)).toFixed(1);
            setBMI(bmiValue);

            let healthInfoText = "";
            if (bmiValue < 18.5) {
                healthInfoText = "Underweight";
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                healthInfoText = "Normal weight";
            } else if (bmiValue >= 25 && bmiValue < 30) {
                healthInfoText = "Overweight";
            } else {
                healthInfoText = "Obese";
            }
            setHealthInfo(healthInfoText);
        }
    }, [userData]);

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
            <div className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-4 rounded-md'>
                <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pl-1 rounded-lg'>
                    BMI Information
                </h1>
                <div style={{ width: 100 }}>
                <CircularProgressbar
            value={bmi}
            text={`${bmi}%`}
            styles={{
              path: {
                stroke: "#1890ff",
                strokeLinecap: "butt",
              },
              text: {
                fill: "#1890ff",
                fontSize: "20px",
              },
              trail: {
                stroke: "#d6d6d6",
              },
            }}
          />
                </div>
                <div className="text-white" >
                    <ul>
                        <li>
                            <h2>Weight : {userData.weight} kg</h2>
                        </li>
                        <li>
                            <h2>Height : {userData.height} cm</h2>
                        </li>
                        <li>
                            <h2>BMI Value : {bmi}  kg/m2</h2>
                        </li>
                        <li>
                            <h2>Health Information : {healthInfo}</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>


    );
};

export default UserBMIcal;


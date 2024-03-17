import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import UserPanel from '../dashbord/UserPanel';
import loadLogo from '../assests/home/loadImg.png'
import { FaUser } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Dashboard = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    const [data, setData] = useState(false);
    const history = useNavigate();
    

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });

        const data = await res.json();

        if (data.status == 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data);
            history("/dash");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);



    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="flex flex-row">
                <div className="flex-grow  p-30">
                    {data ? (
                        <div className="w-full">
                            <div className="text-white text-right pr-40">
                                <FaUser className="inline mr-2" />
                                {logindata ? logindata.ValidUserOne.email : ""}
                            </div>
                            <div>
                            <ToastContainer />
                            <UserPanel/>
                            </div>    
                           
                        </div>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh",
                            }}
                        >
                            <img src={loadLogo} alt='' />
                            <h3 className='text-white'> Loading...</h3> &nbsp;
                            <CircularProgress style={{ color: 'white' }} />
                        </Box>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
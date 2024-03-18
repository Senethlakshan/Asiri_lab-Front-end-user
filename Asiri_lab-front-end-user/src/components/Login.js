import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../components/uitls/axios'; // Adjust the path according to your project structure
import { LoginContext } from '../components/ContextProvider/Context'; // Ensure the correct path

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpval] = useState({ username: "", password: "" });
    const { setIsAuthenticated } = useContext(LoginContext); // Use the setIsAuthenticated function from context
    const navigate = useNavigate();

    const setVal = (e) => {
        const { name, value } = e.target;
        setInpval(prevVal => ({ ...prevVal, [name]: value }));
    };

    const loginuser = async (e) => {
        e.preventDefault();
        const { username, password } = inpval;

        if (!username || !password) {
            toast.error("Username and password are required!", { position: "top-center" });
            return;
        }

        try {
            const response = await API.post("/user/login", { username, password });
            setIsAuthenticated(true); // Update authentication state
            navigate("/dash"); // Navigate to dashboard
            setInpval({ username: "", password: "" }); // Reset form
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed!", { position: "top-center" });
        }
    };

    return (
        <>
            <section className='form-background'>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are glad you are back. Please login.</p>
                    </div>
                    <form onSubmit={loginuser}>
                        <div className="form_input">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={inpval.username} onChange={setVal} name="username" id="username" placeholder='Enter Your Username' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>{!passShow ? "Show" : "Hide"}</div>
                            </div>
                        </div>
                        <button type='submit' className='btn'>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    );
};

export default Login;

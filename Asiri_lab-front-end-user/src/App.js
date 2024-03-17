import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Home from './components/homepage/Home'
import Contact from './components/homepage/Contact'
import About from './components/homepage/Aboutus'
import Services from './components/homepage/Services'
import Blog1 from '../src/components/homepage/article1'
import Blog2 from '../src/components/homepage/article2'
import Blog3 from '../src/components/homepage/article3'
import Adminlogin from "./adminLOG/Adminlogin";
import Profile from './dashbord/Profile'
import Packages from "./dashbord/Packages";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";


function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])
  return (
    <>
      {
        data ? (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash/*" element={<Dashboard />} />
              <Route path="*" element={<Error />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/article-Cardio-Kickboxing" element={<Blog1 />} />
              <Route path="/article-Strength-Training" element={<Blog2 />} />
              <Route path="/article-Yoga-and-Pilates" element={<Blog3 />} />
              <Route path="/dash/profile" element={<Profile />} />
              <Route path="/dash/settings" element={<Packages />} />
              <Route path="/adminlogin" element={<Adminlogin />} />
            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;


//created by seneth
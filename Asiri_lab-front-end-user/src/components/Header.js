import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import "./header.css"; // Ensure the correct path
import weblogo from '../assests/Homepage/logonaw.png'; // Ensure the correct path
import { LoginContext } from './ContextProvider/Context'; // Ensure the correct path
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from "react-router-dom";
import API from '../components/uitls/axios'; // Adjust the path according to your project structure

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    navigate("/dash"); 
    setAnchorEl(null);
  }


  const logoutuser = async () => {
    try {
      await API.post('/user/logout'); 
      localStorage.removeItem("usersdatatoken"); 
      setIsAuthenticated(false); 
      navigate("/"); 
    } catch (error) {
      console.error("Logout failed", error);
     
    }
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <NavLink to="/">
            <img src={weblogo} alt="Logo" />
          </NavLink>
        </div>
        <div className="nav-buttons">
        <div className='btnns'>
        <NavLink to="/">Home</NavLink>
          <NavLink to="/Services">Service</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
          {isAuthenticated ? (
            <>
              <Avatar style={{ background: "salmon" }} onClick={handleClick}></Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logoutuser}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <div className='logbtn'><NavLink to="/login">Login</NavLink></div>
              <div className='regbtn'><NavLink to="/register">Register</NavLink></div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext(null);

const Context = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
       
        const token = localStorage.getItem("usersdatatoken");
        setIsAuthenticated(!!token);
    }, []);

    return (
        <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </LoginContext.Provider>
    );
};

export default Context;
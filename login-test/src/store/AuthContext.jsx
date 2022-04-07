import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedIn === 'LOGGED_IN') setIsLoggedIn(true);
  }, []);

  const loginHandler = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', 'LOGGED_OUT');
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, loginHandler, logoutHandler };

  return <AuthContext.Provider {...{ value }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error('Auth Context is not a Context.');
  }

  return authContext;
};

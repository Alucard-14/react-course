import React from 'react';

import { useAuthContext } from '../../store/AuthContext';

import classes from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn, logoutHandler } = useAuthContext();

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

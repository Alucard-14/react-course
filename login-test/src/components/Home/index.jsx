import React from 'react';
import { useAuthContext } from '../../store/AuthContext';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './Home.module.css';

const Home = () => {
  const { logoutHandler } = useAuthContext();

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;

import React from 'react';

import Login from './components/Login';
import Home from './components/Home';
import MainHeader from './components/MainHeader';

import { useAuthContext } from './store/AuthContext';

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

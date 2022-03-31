import React, { useState } from 'react';

import Card from './components/UI/Card';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div className='flex min-h-screen min-w-full bg-[#1f1f1f] justify-center'>
      <div className='container'>
        <Card className='my-8 mx-auto p-4 w-[90%] max-w-[40rem]'>
          <AddUser onAddUser={handleAddUser} />
          <UsersList {...{ users }} />
        </Card>
      </div>
    </div>
  );
}

export default App;

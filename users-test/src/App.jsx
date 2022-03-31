import React, { useState } from 'react';

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
        <AddUser onAddUser={handleAddUser} />
        {users.length !== 0 && <UsersList {...{ users }} />}
      </div>
    </div>
  );
}

export default App;

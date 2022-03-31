import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../UI/Card';

const UsersList = ({ users }) => {
  return (
    <Card className='my-8 mx-auto w-[90%] max-w-[40rem]'>
      <ul className='list-none p-4'>
        {users.map(({ username, age }) => (
          <li
            key={`users-list-item-${username}-${Math.random()}`}
            className='border border-solid border-[#ccc] my-2 mx-0 p-2'>
            {username} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UsersList;

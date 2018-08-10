import React from 'react';

const UserDetails = props => {
  const email = props.user.email;

  return (
    <div>
      <p>Welcome {email}</p>
    </div>
  );
};

export default UserDetails;

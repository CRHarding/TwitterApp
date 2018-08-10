import React from 'react';

const UserDetails = props => {
  const userObject = JSON.parse(props.user);
  const email = userObject.user.email;

  return (
    <div>
      <p>Welcome {email}</p>
    </div>
  );
};

export default UserDetails;

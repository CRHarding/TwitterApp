import React, { Component } from 'react';

const UserDetails = props => {
  const user = props.user;
  return (
    <div>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetails;

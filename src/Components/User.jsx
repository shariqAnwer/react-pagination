import React from "react";

const User = ({ user }) => {
  //   console.log(user);
  return (
    <div>
      <h5>{`Full Name: ${user.name.first} ${user.name.last}`}</h5>
      <h5>{`Mobile No: ${user.phone}`}</h5>
      <hr />
    </div>
  );
};

export default User;

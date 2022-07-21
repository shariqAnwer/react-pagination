import React from "react";

const User = ({ user }) => {
  //   console.log(user);
  return (
    <div>
      <h3>{`Full Name: ${user.name.first} ${user.name.last}`}</h3>
      <hr />
    </div>
  );
};

export default User;

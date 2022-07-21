import React from "react";
import { USER_PER_PAGE } from "../Utils/Constants";
import User from "./User";
const Users = ({ users, page }) => {
  //   console.log(USER_PER_PAGE);
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  return selectedUsers.map((user) => (
    <User user={user} key={user.login.uuid} />
  ));
};

export default Users;

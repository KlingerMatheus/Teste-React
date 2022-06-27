// TODO Create component to list users
import React from "react";

const UserList = (props) => {
  const renderUsers = () => {
    if (props.usersWhomReceivedEmail === null) return;
    if (props.usersWhomReceivedEmail.length === 0)
      return (
        <p className="error-alert">
          Unfortunately none of the users received the email.
        </p>
      );
    return props.usersWhomReceivedEmail.map((user, index) => {
      return <li key={index}>{user.id}</li>;
    });
  };

  return <>{renderUsers()}</>;
};

export default UserList;

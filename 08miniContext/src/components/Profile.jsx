import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged</h1>;
  return <div>Profile: {user.userName}</div>;
}

export default Profile;

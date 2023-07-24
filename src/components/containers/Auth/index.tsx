import React, { useState } from "react";
import Login from "../Login";
import Register from "../Register";

export default function auth() {
  const [userHasRegistered, setUserHasRegistered] = useState<boolean>(true);

  return <>{userHasRegistered == true ? <Login /> : <Register />}</>;
}

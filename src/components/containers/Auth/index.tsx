import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

export default function auth() {
  const [userHasRegistered] = useState<boolean>(true);

  return <>{userHasRegistered == true ? <Login /> : <Register />}</>;
}

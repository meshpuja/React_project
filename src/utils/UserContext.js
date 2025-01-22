import { createContext } from "react";

const UserContext = createContext({
  isloggedIn: "default user",
});
export default UserContext;

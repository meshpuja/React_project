import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { isloggedIn } = useContext(UserContext);
  const cartval = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-green-50 p-5 m-5 justify-between">
      <div className="w-24 items-center">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item items-center">
        <ul className="flex items-center px-1 mt-5 ">
          <li className="px-4">OnlineStatus:{onlineStatus ? " OFF" : " ON"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart{cartval.length}</Link>
          </li>
          <li className="px-4">
            <button
              className="bg-green-400 rounded-lg p-2"
              onClick={() => {
                btnReactName === "Login"
                  ? setBtnReactName("Logout")
                  : setBtnReactName("Login");
              }}
            >
              {btnReactName}
            </button>
          </li>
          <li className="px-4">{isloggedIn}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

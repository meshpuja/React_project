import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  return (
    <div className="header">
      <div className="image-class">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>onlineStatus:{onlineStatus ? "off" : "On"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnReactName === "Login"
                  ? setBtnReactName("Logout")
                  : setBtnReactName("Login");
              }}
            >
              {btnReactName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

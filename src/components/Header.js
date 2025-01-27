import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () =>{

    const [loginStatus, setLoginStatus] = useState("Offline");

    const handleLoginStatus = () =>{
        setLoginStatus((loginStatus === "Online")?"Offline":"Online");
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                <button onClick={handleLoginStatus}>
                    {loginStatus}
                </button>
            </div>
        </div>
    )
}

export default Header;
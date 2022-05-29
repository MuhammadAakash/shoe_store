import React from "react";
import { Link } from "react-router-dom";


function NavBar (){
    return(
        <div className="nav-container">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Products</Link>
        </div>
    )
}

export default NavBar;
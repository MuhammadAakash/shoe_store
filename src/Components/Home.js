import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h2 className="center">Welcome to the Home Page.</h2>
            <h3 className="center"> Go to Products page to see all <Link to="/">Products</Link>
            
            </h3>
        </div>
    )
}

export default Home;
import React from "react";
import shoes from '../shoes.json';
import { Link } from "react-router-dom";


function Products(){
    console.log(shoes)
    return(
        <div>
            <h3 className="center">Welcome to Products Page</h3>
        
        <div className="productContainer">

            {Object.keys(shoes).map(keyname => {
                const shoe = shoes[keyname]
                return (
                    <Link key={keyname} className="link" to={`/product/${keyname}`}>
                        <h2>{shoe.name}</h2>
                        <img src={shoe.img} height={150} alt={keyname}/>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}

export default Products;
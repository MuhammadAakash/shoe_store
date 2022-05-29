import React from "react";
import { useParams } from 'react-router-dom';
import shoes from '../shoes.json';

function ProductItem() {
    const { id } = useParams()
    const shoe = shoes[id]
    if (!shoe) {
        return <h2 className="center">Product Not Found.</h2>
    }
    console.log("Shoe data is :", shoe);
    return (
        <div>
            <h3 className="center">Welcome to Product Item Page</h3>
            <div className="link">
                <h2>{shoe.name}</h2>
                <img src={shoe.img} height={500} alt={shoe.name} />
            </div>
        </div>
    )
}

export default ProductItem;
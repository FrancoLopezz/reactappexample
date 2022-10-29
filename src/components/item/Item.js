import React from "react";
import { Link } from "react-router-dom";


const Item = (props) => {

    const {id, title, price, stock, image} = props 
    
    return(
        <div className='divContainer'>

            <div className='divImg'>
                <Link to={`/dunk/${id}`}><img src={image} alt="zapatilla"></img></Link>
            </div>

            <h2>{title}</h2>

            <p>${price}</p>
            <p stock={stock} >{stock} disponibles!</p>
        </div>
    )
}

export default Item;
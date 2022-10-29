import React from "react";
import { useCartContext } from "../context/CartContext";
import './itemcart.css' 

const ItemCart = ({product}) => {

    const {removeItem} = useCartContext();

    return( 
        <div className="itemCart">

            <img src={product.image} alt={product.title}></img>
            <div>
                <p>{product.title}</p>
                <p>{product.qty}</p>
                <p>{product.price}</p>
                <p>Subtotal: ${product.qty * product.price}</p>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
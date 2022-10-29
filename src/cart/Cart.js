import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {

    const {cart, totalPrice} = useCartContext();


    if(cart.length === 0){
        return(
            <main>
                <p> no hay eolementos en el carrito</p>
                <Link to={'/'}> Buscar Zapatillas!</Link>
            </main>
        );
    }

    return(
        <main>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
        </main>
    )
}

export default Cart;
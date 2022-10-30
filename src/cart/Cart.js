import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import swal from 'sweetalert';

const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext()

    const order = {
        comprador: {
            nombre: 'Juan',
            mail: 'asdasd@gmail.com',
            telefono: '12312312',
            dirección: 'calle falsa 123'
        },

        item: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.qty})),
        total: totalPrice(),
    }

    const buyButton = () => {
        const db = getFirestore()
        const ordenCompra = collection(db, 'orders')
        addDoc(ordenCompra, order)
        .then(({id}) => swal("Congratulations, your purchase order is: " + (id)))
        clearCart()
    }

    if (cart.length === 0){
        return(
            <main>
                <p>No purchase recorded</p>
                <Link to="/"> Find sneakers </Link>
            </main>
        )
    }
    
    return(
        <main>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={buyButton} >Buy!</button>
        </main>
    )
    
}

export default Cart;
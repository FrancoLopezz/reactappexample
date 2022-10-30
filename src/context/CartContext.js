import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (data, qty) => {
        if (inCart(data.id)){ 
            setCart(cart.map(item => {
                return item.id === data.id ? { ...item, qty: item.qty + qty} : item
            }))
        }else {
            setCart([...cart, {...data, qty}])
        }

    } 

    const clearCart = () => setCart([]);

    const inCart = (id) => cart.find(item => item.id === id) ? true : false ; 

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.qty * act.price, 0);
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.qty, 0);

    console.log('carrito: ', cart )

    return(
        <CartContext.Provider value={{clearCart, inCart, removeItem, addItem, totalPrice, totalProducts, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
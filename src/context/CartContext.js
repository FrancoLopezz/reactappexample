import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        if (inCart(item.id)){ 
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, qty: product.qty + qty} : product
            }))
        }else {
            setCart([...cart, {...item, qty}])
        }

    } 

    const clearCart = () => setCart([]);

    const inCart = (id) => cart.find(product => product.id === id) ? true : false ; 

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

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
import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    const {listaDeProductos} = props

    return(
        <div>
            {listaDeProductos.map((producto) => <Item id={producto.id} title={producto.title} price={producto.price} stock={producto.stock} key={producto.id} image={producto.image} type={producto.type}></Item>)}
        </div>
    )
}

export default ItemList;
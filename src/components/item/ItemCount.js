import React, {useState} from "react";

export default function ItemCount ({stock, initial, onAdd}) {

    const [qty, setQty] = useState(initial);

    const incrementar = () => {

        setQty(qty + 1) 
    }
    const disminuir = () => {
        setQty(qty - 1) 
    }

    return(
        <div>
            <button onClick={incrementar}>+</button>

            <p>
                {qty}
            </p>

            <button onClick={disminuir}>-</button>

            <button onClick={() => onAdd(qty)}>Add to Cart</button>
        </div>
    )

}
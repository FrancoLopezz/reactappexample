import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './item/ItemCount';

import {useCartContext} from "../context/CartContext"

const ItemDetail = ({data}) => {
    
  const [goCart, setGoCart] = useState(false)

  const {addItem} = useCartContext();
    
  const onAdd = (qty) =>{
    addItem(data, qty);
    setGoCart(true);
  } 

    return ( 
      <div className='divContainer'>

        <main>
          <div className='divImg'>
            <img src={data.image}></img>
          </div>
          
          <h2>
              {data.title}
          </h2>
          
          <p>${data.price} - {data.stock} Available!</p>
          
          {
            goCart
             ? <Link to= {"/cart"}> Finish buying</Link> 
             : <ItemCount stock={data.stock} onAdd={onAdd} initial={0}></ItemCount>
          
          }
          <div>
                <Link to={'/dunk'}>Back</Link>
          </div>
        </main>

      </div>
    );
  };

export default ItemDetail;

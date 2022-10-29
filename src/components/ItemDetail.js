import React from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './item/ItemCount';

import {useCartContext} from "../context/CartContext"

const ItemDetail = (data) => {
    
  const {item} = data;

  const {addItem} = useCartContext();
    
  const onAdd = (qty) =>{
    addItem(qty, data)

  } 

    return ( 
      <div className='divContainer'>

        <div className='divImg'>
          <img src={item.image}></img>
        </div>

        <h2>
            {item.title}
        </h2>

        <p>${item.price} - {item.stock} disponibles!</p>

        <ItemCount stock={item.stock} onAdd={onAdd} initial={0}></ItemCount>
        
        <div>
              <Link to={'/dunk'}>Back</Link>
        </div>

      </div>
    );
  };

export default ItemDetail;

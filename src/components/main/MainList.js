import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './ItemList.css';

const MainList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(arrproducts);
    });
  }, []);
  return (
    <div className='divContainer'>
      {products.map((product) => (
        <div key={product.id}>

          <h2>
            <Link to={`/${product.title}/`}>
              {product.title}
            </Link>
          </h2>

          <div className='divImg'>
            <img src={product.image}></img>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MainList;
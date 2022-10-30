import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemList from './ItemList'
import Footer from '../footer/Footer';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let {id} = useParams();
  useEffect(() => {
    const db = getFirestore();
    const dunkCollection = collection(db, 'Dunk');
    getDocs(dunkCollection).then((snapshot) => {
      const arrshoes = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      
      setProducts(arrshoes);
    });
  }, []);
  return (
    <div>

      <ItemList listaDeProductos={products} categoryId={id} key={id}></ItemList>

      <Footer/>
    </div>
  );
};

export default ItemListContainer;
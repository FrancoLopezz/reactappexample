import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import Footer from './footer/Footer';

const ItemDetailContainer = (category) => {
    const [datos, setDatos] = useState([])
    const {id} = useParams(); 

    useEffect(() => {
      const db = getFirestore();
      const queryDoc = doc(db, category.nombre, id);
      getDoc(queryDoc)
       .then(res => setDatos({id: res.id, ...res.data()}))
    },[])

    return ( 
      <div>

        <ItemDetail data={datos} id={id}></ItemDetail>

        <Footer/>
        
      </div>

      
    );
  };

export default ItemDetailContainer;

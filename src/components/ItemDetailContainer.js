import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import Footer from './footer/Footer';

const ItemDetailContainer = () => {
    const db = getFirestore();
    const [datos, setDatos] = useState([])
    const {id} = useParams(); 

    const getItem = async () => {
      try {
          const result = await getDoc(doc(db, "Dunk", id))
          setDatos(result.data());
      }catch(error){
        alert('error')
      }
    }

    useEffect(()=> {
      getItem();
    }, [datos]);

    return ( 
      <div>

        <ItemDetail item={datos} id={id}></ItemDetail>

        <Footer/>
        
      </div>

      
    );
  };

export default ItemDetailContainer;

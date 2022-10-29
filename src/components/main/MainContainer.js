import React from 'react'; 
import styled from 'styled-components';
import Footer from '../footer/Footer';


import MainList from './MainList';

const H1saludo = styled.h1`
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;
    font-family: Arial;
    font-size: 30px;
    font-weight: bolder;
    color: whitesmoke;  
    text-transform: uppercase;
    text-shadow: 1px 0 red, 2px 0 blue; 
`;

const MainContainer = (greeting) => {

  
    return(
       <div>

         <H1saludo>Hello <span>{greeting.nombre}</span>!😁 And Welcome To E-COMMERCE of Nike!</H1saludo> 
        
         <MainList/> 

         <Footer/>
        
       </div>
    )
}

export default MainContainer;
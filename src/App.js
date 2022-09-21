import React from 'react'; 
import './App.css';
import Navbar from './components/NavBar';
import ItemListcontainer from "./components/ItemListContainer";
import Button from "./components/Button";

function App() {
  return (
    <div className='App'>
      <Navbar/>

      <main> 
        <ItemListcontainer nombre='Franco'/> 

        <Button></Button>  
      </main>

    </div>
  );
}

export default App;

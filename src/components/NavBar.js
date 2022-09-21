import React from 'react'; 
import Cartwidget from "./CartWidget";


const Navbar = () => {
    return(
        <nav>
            <div id="contenedorNav">
                
                <a href="#"> <Cartwidget/> </a>
                
                <div id="mobile-menu">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
                </div>
                
                <div>
                    <ul id="nav-list">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Ventas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;
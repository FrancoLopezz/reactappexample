import React from 'react'; 
import {Link} from "react-router-dom"
import Cartwidget from '../cart/CartWidget';
 

const Navbar = () => {
    return(
        <nav>
            <div id="contenedorNav">
                
                <Link to={'/cart'}> <Cartwidget/> </Link>
                
                <div>
                    <ul id="nav-list">
                        <li><Link to={"/"}>Início</Link></li>
                        <li><Link to={"/dunk"}>Dunk</Link></li>
                        <li><Link to={"/airforce"}>Air Force</Link></li>
                        <li><Link to={"/jordan"}>Jordan</Link></li>
                        <li><Link to={"/contacto"}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;
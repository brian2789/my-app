import React from "react";
import CartWidget from "../CartWidget";
import {ReactComponent as ReactLogo} from '../../imagenes/logovector.svg';
import './style.css'


export default function NavBar() {
  return (
    <div className="NavBarContainer">
      <div className="Logo">
      <ReactLogo />
        </div>
      <div className="nav">
      
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Info</a>
          <a href="#">Contacto</a>
        
        </div>
      <div>
          <CartWidget />
      </div>
    </div>
  );
}

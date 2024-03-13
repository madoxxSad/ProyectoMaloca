import React from 'react';
import image from '../images/logo.png'

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li><a href="/"><img className='logo' src={image} alt="Logo" /></a></li>
        <li><a href="/cabanas">Cabañas</a></li>
        <li><a href="/actividades">Actividades</a></li>
        <li><a href="/preguntas">Preguntas</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cabanas">Cabañas</Link></li>
        <li><Link to="/actividades">Actividades</Link></li>
        <li><Link to="/preguntas">Preguntas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
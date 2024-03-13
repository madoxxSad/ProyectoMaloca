import React from 'react';
import image from '../images/logo.png'

const HomePage = () => {
  return (
    <div>
      <h1>Proyecto Maloca</h1>
      <img src={image} alt="Logo" />
      <p>Proyecto Maloca es un espacio que busca estar en armonía con 
        el medio ambiente, procurando generar un menor impacto dentro 
        del área natural donde nos encontramos. </p>
    </div>
  );
};

export default HomePage;
import React from 'react';
import image from '../images/logo.png'

const HomePage = () => {
  return (
    <div className='homeContainer'>
      <div className='homeTitle'>
        <h1>Proyecto Maloca</h1>
      </div>
      <div className='homeLogo'>
        <img src={image} className='hLogo' alt="Logo" />
      </div>
      <div className='homeText'>
        <p>Proyecto Maloca es un espacio que busca estar en armonía con 
        el medio ambiente, procurando generar un menor impacto dentro 
        del área natural donde nos encontramos. </p>
      </div>
      
    </div>
  );
};

export default HomePage;
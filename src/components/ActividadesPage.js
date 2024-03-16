import React from 'react';
import kayak from '../images/kayak.png';
import fotografia from '../images/fotografia.png';
import senderismo from '../images/senderismo.png';
import visitar from '../images/visitar.png';
import descansar from '../images/descansar.png'

const ActividadesPage = () => {
  return (
    <div className='actContainer'>
      <div className='actTitle'>
        <h1>Actividades</h1>
      </div>

      <div className='actList'>
        <div className='actividad'>
          <div className='actImg'>
            <img src={kayak} className='imgActividad' alt="kayak" />
          </div>
          <div className='actDescription'>
           <h2>
              KAYAK
           </h2>
           <p>
              En el lugar hay un estero en el cual que puede rentar un kayak 
              y apreciar el paisaje del lugar y sus diferentes tipos de aves 
              que paran a descansar en él.
           </p>
          </div>
        </div>
      </div>

      <div className='actList'>
        <div className='actividad'>
          <div className='actImg'>
           <img src={senderismo} className='imgActividad' alt="senderismo" />
          </div>
          <div className='actDescription'>
            <h2>
              SENDERISMO
            </h2>
            <p>
              La propiedad cuenta con senderos en los cuales se podrán 
              encontrar una gran variedad de árboles (parotas, ceibas, 
              huges, etc), aves y algún que otro habitante del lugar 
              (Tejones, iguanas, venados, pecaríes, etc.)
              Si desean practicar senderismo, recomendamos traer calzado 
              cómodo para caminar y algo para llevar agua en la caminata.
            </p>
          </div>
        </div>
      </div> 

      <div className='actList'>
        <div className='actividad'>
          <div className='actImg'>
            <img src={fotografia} className='imgActividad' alt="fotografia" />
          </div>
          <div className='actDescription'>
            <h2>
              FOTOGRAFÍA
            </h2>
            <p>
             Si lo que te gusta es la fotografía de naturaleza, estás en 
             el lugar ideal para que dejes volar tu imaginación. Ya sea con su flora, 
             fauna o paisajes que te regala el lugar. 
            </p>
          </div>
        </div>
      </div> 

      <div className='actList'>
        <div className='actividad'>
          <div className='actImg'>
            <img src={visitar} className='imgActividad' alt="visitar" />
          </div>
          <div className='actDescription'>
            <h2>
              VISITAR PLAYAS CERCANAS
            </h2>
            <p>
              Si tienes planeado quedarte varios días, podrás visitar diferentes 
              playas que quedan cerca del lugar en auto.
            </p>
            <ul>
                <li>
                  El Bejuco (5 min): Famoso por sus botanas de mariscos y el color 
                  de los murales que hay pintados en sus casas.
                </li>
                <li>
                  Caleta (20 min ): Una playa familiar para ir a nadar en un mar tranquilo.
                </li>
                <li>
                  Nexpa (30 min): En este lugar podrás practicar surf o tomar alguna clase con un instructor.
                </li>
                <li>
                  Las pozas del atracón (45 min): Caminaras sobre una cañada para ir encontrando 
                  pozas en las cuales puedes nadar
                </li>
                <li>
                  Pichilinguillo (1 hr): Una playa donde encontrarás una playa cristalina y perfecta para nadar.
                </li>
            </ul>  
          </div>
        </div>
      </div> 

      <div className='actList'>
        <div className='actividad'>
          <div className='actImg'>
            <img src={descansar} className='imgActividad' alt="descansar" />
          </div>
          <div className='actDescription'>
            <h2>
              DESCANSAR
            </h2>
            <p>
              Si lo que buscas es descansar y dejar todo el estres atrás, Proyecto Maloca es el lugar 
              ideal para descansar ya sea en tu cabaña o en alguna hamaca solo disfrutando del paisaje 
              y sonidos del mar y alrededor.
            </p>
          </div>
        </div>
      </div> 

    </div>
  );
};

export default ActividadesPage;
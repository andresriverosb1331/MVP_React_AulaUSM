import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = () => {
    return (
      <div className='contenedor-ramos'>
        <div className='card'>
          <div className='rectangle1'></div>
          <div className='ramo'>
            Diseño de interfaces usuarias | Paralelos: 200/201/202 (2024-02)(INF322)
          </div>
          <div className='group1'>
            <div className='rectangle2'></div>
            <div className='carrera'>Informática</div>
          </div>
        </div>
        <div className='card'>
          <div className='rectangle1'></div>
          <div className='ramo'>
            Computación científica | Paralelos: 200/201/202 (2024-02)(INF285)
          </div>
          <div className='group1'>
            <div className='rectangle2'></div>
            <div className='carrera'>Informática</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;

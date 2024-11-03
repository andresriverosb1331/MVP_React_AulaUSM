import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

const Card = () => {
  const navLinkClass = ({ isActive }) => (isActive ? 'mini-nav mini-nav--active' : 'mini-nav');
    return (
      <div className='contenedor-ramos'>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">Mis Cursos:
                <NavLink to="/mis-cursos" className="nav-link" id="nav-home-tab" role="tab" aria-selected="true">
                    2024-02
                </NavLink>
                <NavLink to="/mis-cursos" className="nav-link" id="nav-profile-tab" role="tab" aria-selected="false">
                    2024-01
                </NavLink>
                <NavLink to="/mis-cursos" className="nav-link" id="nav-contact-tab" role="tab" aria-selected="false">
                    2023-02
                </NavLink>
            </div>
        </nav>
        
        <div className='Card1'>
          <div className='info-ramo'>
            <div className='rectangle1'>
              <div className='rectangle2'>
                <div className='carrera'>Informática</div>
              </div>
            </div>
            <div className='ramo'>
              Diseño de interfaces usuarias | Paralelos: 200/201/202 (2024-02)(INF322)
            </div>
            </div>
          <div className='alertas-ramo'> Alertas
            <div className='descripcion-alerta'>
              Entrega 1 proyecto | 07/09/2024
            </div>
            <div className='descripcion-alerta'>
              Entrega 2 proyecto | 05/11/2024
            </div>
            <div className='descripcion-alerta'>
              Entrega 3 proyecto | 27/11/2024
            </div>
          </div>
          </div>


      </div>
      
      
    );
  };
  
  export default Card;

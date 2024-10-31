import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

const Card = () => {
  const navLinkClass = ({ isActive }) => (isActive ? 'mini-nav mini-nav--active' : 'mini-nav');
    return (
      <div className='contenedor-ramos'>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">Mis Cursos
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

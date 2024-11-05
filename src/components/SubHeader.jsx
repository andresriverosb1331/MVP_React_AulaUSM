import React from 'react';
import { NavLink } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className="sub-header">
      <nav className="sub-header__nav">
        <NavLink to="/curso_page" className="sub-header__link" activeClassName="active">
          Curso
        </NavLink>
        <NavLink to="/participantes_page" className="sub-header__link" activeClassName="active">
          Participantes
        </NavLink>
        <NavLink to="/calificaciones_page" className="sub-header__link" activeClassName="active">
          Calificaciones
        </NavLink>
      </nav>
    </div>
  );
};

export default SubHeader;

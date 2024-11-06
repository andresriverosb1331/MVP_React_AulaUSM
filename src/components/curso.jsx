import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader from './SubHeader';

const Curso = ({p}) => {
  return (
    <>
      <div>
        <SubHeader param={p}/>
      </div>
      <div className="contenedor-contenido">
        <div className="course">
          <nav className="course__units">
            <div className="course__unit-list">
              <NavLink to={`/curso_page/${p}`} className="unit">
                <h3 className="unit__title">Información General</h3>
                <p className="unit__description">Información del Curso.</p>
              </NavLink>
              <NavLink to="/material_page" className="unit">
                <h3 className="unit__title">Materiales y enlaces</h3>
                <p className="unit__description">Presentaciones y material del curso.</p>
              </NavLink>
              <NavLink to="/tarea_page" className="unit">
                <h3 className="unit__title">Tareas</h3>
                <p className="unit__description">Tareas a evaluar.</p>
              </NavLink>
              <NavLink to="/proyecto_page" className="unit">
                <h3 className="unit__title">Proyecto</h3>
                <p className="unit__description">Proyecto a evaluar.</p>
              </NavLink>
              <NavLink to="/certamen_page" className="unit">
                <h3 className="unit__title">Certámenes</h3>
                <p className="unit__description">Pautas y notas de certámenes.</p>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Curso;

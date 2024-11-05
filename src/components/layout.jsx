import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
//Importar clases de las páginas
import HomePage from '../pages/home_page';
import CalendarPage from '../pages/calendar_page';
import logo_USM from '../assets/USM_logo.png';
import Noticias_avisos from '../pages/Noticias';

const Layout = () => {
  const navLinkClass = ({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link');

  return (
    <BrowserRouter>
      <header className='layout__header'>
        <div className='layout__logo-container'>
          <img src={logo_USM} height={50} width={250} alt="USM Logo" className='layout__logo' />
        </div>
        <nav className='layout__nav'>
          <NavLink to="/" className={navLinkClass}>
            Página Principal
          </NavLink>
          <NavLink to="/calendario" className={navLinkClass}>
            Calendario
          </NavLink>
          <NavLink to="/noticias" className={navLinkClass}>
            Noticias y avisos
          </NavLink>
        </nav>
      </header>
      <main className='layout__page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/calendario' element={<CalendarPage />} />
          <Route path='/noticias' element={<Noticias_avisos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Layout;

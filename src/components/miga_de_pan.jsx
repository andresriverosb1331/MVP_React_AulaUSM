import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/componentes_utiles/miga_de_pan.scss';

const Miga_de_pan = () => {
  const location = useLocation();

  // Split the pathname to create miga_de_pan links
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="miga_de_pan">
      
      <Link to="/" className="miga_de_pan-link">Inicio</Link>
      
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={to} className="miga_de_pan-item">
            <span className="miga_de_pan-separator">»</span>
            {isLast ? (
              <span className="miga_de_pan-current">{capitalize(value)}</span>
            ) : (
              <Link to={to} className="miga_de_pan-link">{capitalize(value)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

// Helper function to capitalize the first letter of each word
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default Miga_de_pan;

import React from 'react';
import '../stylesheets/Noticia/Noticia_card.scss';

const Noticia_card = () => {
  // Sample news data (replace with your own data or fetch from an API)
  const newsItems = [
    {
      image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
      title: 'Orquesta Sinfónica Nacional de Chile presenta concierto “Música de películas”',
      description: 'El elenco presentará obras que pertenecen a la banda sonora de películas y series como Star Wars, Harry Potter, Superman, Jurassic Park y Game.',
      category: 'Arte y Cultura',
      location: 'Casa Central Valparaíso',
      date: '31/10/2024',
      ref: 'https://usm.cl/noticias/orquesta-sinfonica-nacional-de-chile-presenta-concierto-musica-de-peliculas-en-la-usm/'
    },
    {
      image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
      title: 'Investigadores del AC3E se ubican entre los más citados del mundo',
      description: 'El ranking que posiciona a los integrantes del centro perteneciente a la USM en la elite académica mundial fue elaborado por la Universidad de...',
      category: 'Investigación',
      location: 'Campus Santiago',
      date: '30/10/2024',
      ref:'https://usm.cl/noticias/once-investigadores-del-ac3e-se-ubican-entre-el-2-de-los-cientificos-mas-citados-del-mundo/'
    },
    {
      image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
      title: 'En tres regiones y de forma simultánea se realizará nueva versión de la tradicional Feria de Software de la USM',
      description: 'Campus San Joaquín y las Sedes Viña del Mar y Concepción de la casa de estudios serán los escenarios de esta muestra que reunirá...',
      category: 'Feria Software',
      location: 'Campus San Joaquín',
      date: '30/10/2024',
      ref: 'https://usm.cl/noticias/orquesta-sinfonica-nacional-de-chile-presenta-concierto-musica-de-peliculas-en-la-usm/'
    }
  ];

  return (
    <section className="news-section">
      <h2>Noticias</h2>
      <div className="news-cards">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <span className="news-category">{item.category}</span>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <button className="news-button"> 
                <a href={item.ref}>Seguir Leyendo</a>
              </button>
              <div className="news-location">{item.location}</div>
            </div>
            <div className="news-footer">
              <span>Fecha de publicación: {item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Noticia_card;
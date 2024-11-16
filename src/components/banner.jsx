import React, { useState, useEffect } from 'react';
import img1 from '../assets/img11.png'
import img2 from '../assets/OIP.jpeg'
const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const images = [
    img1,img2
  ];

  
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="banner-carousel">
      <button onClick={prevSlide} className="carousel-button">◀</button>
      <div className="banner-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={nextSlide} className="carousel-button">▶</button>
    </div>
  );
};

export default BannerCarousel;

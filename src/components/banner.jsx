import React, { useState, useEffect } from 'react';
import img1 from '../assets/img11.png'
import img2 from '../assets/OIP.jpeg'
const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images (replace with your own image URLs)
  const images = [
    img1,img2
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // useEffect to set up the timer for auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
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

import React, { useState, useEffect } from 'react';
import * as Components from '../Components';

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "kids_carousel_blackbears.webp",
    "kids_carousel_giraffeibis.webp", 
    "Kids_Carousel_Otter.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '400px',
      overflow: 'hidden',
      backgroundColor: '#f0f0f0',
      margin: '20px 0'
    }}>
      {images.map((img, index) => (
        <img 
          key={img}
          src={img}
          alt={`Slide ${index}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default AutoCarousel;
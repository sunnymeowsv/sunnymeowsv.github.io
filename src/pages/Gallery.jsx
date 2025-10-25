import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  const images = [
    'https://source.unsplash.com/random/800x600/?cat',
    'https://source.unsplash.com/random/800x600/?kitten',
    'https://source.unsplash.com/random/800x600/?feline',
    'https://source.unsplash.com/random/800x600/?meow',
    'https://source.unsplash.com/random/800x600/?purr',
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-lg mb-4">Check out some adorable photos from Sunny Meow Cat Cafe!</p>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Cat ${index + 1}`} className="max-h-96 object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;

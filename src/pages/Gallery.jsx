import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  const featuredImages = [
    { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800', caption: 'Meet our adorable residents!' },
    { url: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1e83e?w=800', caption: 'Cozy nap time' },
    { url: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800', caption: 'Playful moments' },
    { url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800', caption: 'Relaxing with friends' },
    { url: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800', caption: 'Window watching' },
  ];

  const cats = [
    {
      name: 'Luna',
      age: '2 years',
      personality: 'Playful and affectionate',
      image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400',
    },
    {
      name: 'Oliver',
      age: '3 years',
      personality: 'Calm and cuddly',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
    },
    {
      name: 'Bella',
      age: '1 year',
      personality: 'Curious and energetic',
      image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400',
    },
    {
      name: 'Max',
      age: '4 years',
      personality: 'Gentle giant',
      image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400',
    },
    {
      name: 'Whiskers',
      age: '2 years',
      personality: 'Social butterfly',
      image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1e83e?w=400',
    },
    {
      name: 'Mittens',
      age: '5 years',
      personality: 'Laid-back and sweet',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Gallery</h1>
        <p className="text-xl text-gray-600">
          Check out adorable photos from Sunny Meow and meet our lovely residents!
        </p>
      </div>

      {/* Featured Carousel */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Photos</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            useKeyboardArrows 
            autoPlay
            interval={4000}
            transitionTime={600}
            showStatus={false}
          >
            {featuredImages.map((item, index) => (
              <div key={index} className="relative">
                <img 
                  src={item.url} 
                  alt={item.caption}
                  className="max-h-[500px] object-cover rounded-lg"
                />
                <div className="legend bg-black bg-opacity-70 text-white py-3 px-6 rounded">
                  {item.caption}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Meet Our Cats */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Adoptable Cats</h2>
        <div className="text-center">
          <p className="text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>

      {/* Visit Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Information</h2>
        <p className="text-lg text-gray-700">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Gallery;

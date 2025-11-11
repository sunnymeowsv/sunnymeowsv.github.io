import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg mb-8">
        <h1 className="text-5xl font-bold mb-4 text-orange-800">Welcome to Sunny Meow</h1>
        <p className="text-xl mb-6 text-gray-700 max-w-3xl mx-auto">
          A California registered nonprofit with 501(c)(3) pending, dedicated to promoting the mutual well-being of cats and people
          through community engagement, education, and therapeutic interaction.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition opacity-50 cursor-not-allowed">
            Menu Coming Soon
          </button>
          <Link to="/gallery" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
            See Our Cats
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-5xl mb-4">🏠</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Cozy Space</h3>
          <p className="text-gray-600">
            Enjoy a warm atmosphere while spending quality time with our adorable cats.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-5xl mb-4">🐱</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Adoptable Cats</h3>
          <p className="text-gray-600">
            Meet our lovable residents! All of our cats are available for adoption 
            and looking for their forever homes.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-5xl mb-4">❤️</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Therapeutic Environment</h3>
          <p className="text-gray-600">
            Experience the calming effects of spending time with cats in a peaceful, 
            stress-free environment designed for relaxation.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-4">
          At Sunny Meow, we believe in the power of human-animal connection.
          Our mission is to provide a sanctuary where cats can thrive while building
          meaningful relationships with our community members.
        </p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
          Every visit supports our nonprofit work in cat rescue, rehabilitation, and adoption services. 
          Together, we're making a difference, one purr at a time.
        </p>
      </div>

      {/* Visit Information */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Information</h2>
        <p className="text-lg text-gray-600">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Homepage;

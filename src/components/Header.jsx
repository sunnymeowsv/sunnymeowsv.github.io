import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    const baseClasses = "text-white text-3xl font-cat-font font-bold hover:text-yellow-100 transition-colors flex items-center gap-2 flex-shrink-0 transform hover:scale-105";
    return isActive(path)
      ? `${baseClasses} bg-yellow-300 text-orange-600 hover:bg-yellow-400 underline`
      : `${baseClasses} bg-orange-400 text-white hover:bg-orange-300 hover:text-yellow-100`;
  };

  return (
    <nav className="bg-gradient-to-r from-sunny-orange via-bright-orange to-yellow-500 shadow-lg">
      <div className="px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white text-3xl font-cat-font font-bold hover:text-yellow-100 transition-colors flex items-center gap-2 flex-shrink-0 transform hover:scale-105">
            <img src="/assets/logo-cropped-64.png" alt="Sunny Meow Logo" className="w-12 h-12 rounded-full shadow-lg" />
            Sunny Meow
          </Link>
          <ul className="flex space-x-6 md:space-x-12 text-white font-semibold text-lg flex-wrap justify-end">
            <li className="mr-4">
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/about" className={navLinkClass('/about')}>
                About Us
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/menu" className={navLinkClass('/menu')}>
                Menu
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/gallery" className={navLinkClass('/gallery')}>
                Gallery
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/contact" className={navLinkClass('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

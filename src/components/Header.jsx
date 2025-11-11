import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    return isActive(path)
      ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
      : "hover:text-yellow-200 transition-colors";
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white text-3xl font-bold hover:text-yellow-100 transition-colors flex items-center gap-2">
            <span className="text-4xl">🐱</span>
            Sunny Meow
          </Link>
          <ul className="flex space-x-8 text-white font-semibold text-lg">
            <li>
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLinkClass('/about')}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/menu" className={navLinkClass('/menu')}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={navLinkClass('/gallery')}>
                Gallery
              </Link>
            </li>
            <li>
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

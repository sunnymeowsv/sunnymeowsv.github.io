import React from 'react';

const Menu = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <p className="text-lg">Enjoy a variety of cat-themed drinks and snacks while spending time with our furry friends.</p>
      <ul className="list-disc pl-6">
        <li>Meow Mocha - $4.50</li>
        <li>Purr-fect Latte - $4.00</li>
        <li>Catnip Tea - $3.00</li>
        <li>Whisker Waffles - $5.00</li>
        <li>Tail Tuna Sandwich - $6.00</li>
      </ul>
      {/* Add more placeholder menu items */}
    </div>
  );
};

export default Menu;

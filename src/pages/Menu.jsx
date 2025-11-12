import React from 'react';

const Menu = () => {
  const beverages = [
    { name: 'Meow Mocha', price: '$4.50', description: 'Rich espresso with chocolate and steamed milk' },
    { name: 'Purr-fect Latte', price: '$4.00', description: 'Smooth espresso with steamed milk and foam art' },
    { name: 'Catnip Tea', price: '$3.00', description: 'Herbal blend with calming chamomile' },
    { name: 'Whisker Cappuccino', price: '$4.25', description: 'Bold espresso with frothy milk' },
    { name: 'Tabby Chai Latte', price: '$3.75', description: 'Spiced chai with steamed milk' },
    { name: 'Persian Hot Chocolate', price: '$3.50', description: 'Creamy hot chocolate with whipped cream' },
    { name: 'Siamese Green Tea', price: '$2.75', description: 'Refreshing organic green tea' },
    { name: 'Maine Coon Coffee', price: '$2.50', description: 'Premium drip coffee - bold and smooth' },
  ];

  const snacks = [
    { name: 'Whisker Waffles', price: '$5.00', description: 'Belgian waffles with maple syrup and butter' },
    { name: 'Paw Print Cookies', price: '$3.50', description: 'Freshly baked sugar cookies' },
    { name: 'Kitty Croissant', price: '$4.00', description: 'Buttery, flaky French croissant' },
    { name: 'Feline Muffins', price: '$3.75', description: 'Blueberry or chocolate chip muffins' },
    { name: 'Cat Nap Scones', price: '$4.25', description: 'Traditional scones with jam and cream' },
  ];

  const lunch = [
    { name: 'Tuna Melt Sandwich', price: '$7.50', description: 'Grilled tuna salad with melted cheese' },
    { name: 'Turkish Van Wrap', price: '$8.00', description: 'Grilled chicken, veggies, and hummus wrap' },
    { name: 'Ragdoll Club Sandwich', price: '$8.50', description: 'Turkey, bacon, lettuce, and tomato' },
    { name: 'Calico Caprese', price: '$7.00', description: 'Fresh mozzarella, tomato, and basil panini' },
    { name: 'Bengal Veggie Burger', price: '$7.75', description: 'Plant-based burger with all the fixings' },
  ];

  const MenuCategory = ({ title, items, icon }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        <span className="text-4xl">{icon}</span>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <span className="text-orange-600 font-bold text-lg">{item.price}</span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Menu</h1>
        <p className="text-xl text-gray-600">
          Enjoy our cat-themed treats and beverages while spending time with our feline friends
        </p>
      </div>

      {/* Beverages */}
      <MenuCategory title="Beverages" items={beverages} icon="☕" />

      {/* Snacks */}
      <MenuCategory title="Snacks" items={snacks} icon="🍪" />

      {/* Lunch */}
      <MenuCategory title="Lunch" items={lunch} icon="🥪" />

      {/* Footer Note */}
      <div className="text-center bg-gray-100 p-6 rounded-lg">
        <p className="text-lg text-gray-700">
          All proceeds support our nonprofit mission to rescue and care for cats in need.
          Thank you for your support! ❤️
        </p>
      </div>
    </div>
  );
};

export default Menu;

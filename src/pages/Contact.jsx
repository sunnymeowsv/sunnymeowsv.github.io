import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">Get in touch with Sunny Meow Cat Cafe!</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send Message</button>
      </form>
      <p className="mt-4">Email: info@sunnymeowcatcafe.org | Phone: (123) 456-7890</p>
      {/* Note: Form is placeholder; add actual submission logic later */}
    </div>
  );
};

export default Contact;

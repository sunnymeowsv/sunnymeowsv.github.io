import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you! Get in touch with any questions.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-3">📍</span> Location
            </h3>
            <p className="text-gray-600 ml-9">
              Coming Soon! Sunnyvale Downtown Murphy Ave<br />
              Sunnyvale, CA 94086<br />
              United States
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-3">📞</span> Phone
            </h3>
            <p className="text-gray-600 ml-9">
              <a href="tel:+16696669950" className="hover:text-blue-600">(669) 666-9950</a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-3">✉️</span> Email
            </h3>
            <p className="text-gray-600 ml-9">
              <a href="mailto:sunnymeowsv@gmail.com" className="hover:text-blue-600">
                sunnymeowsv@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-3">🕐</span> Hours
            </h3>
            <div className="text-gray-600 ml-9">
              <p>Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
              Facebook
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition">
              Instagram
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition">
              Twitter
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="name">
                Name *
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="email">
                Email *
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="phone">
                Phone (Optional)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="subject">
                Subject *
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="visit">Schedule a Visit</option>
                <option value="adoption">Adoption Inquiry</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="donation">Donation Information</option>
                <option value="general">General Question</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="message">
                Message *
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-lg p-8 text-center mb-12">
        <div className="bg-white p-12 rounded-lg inline-block">
          <p className="text-gray-600 text-lg">🗺️ Map Location</p>
          <p className="text-gray-500 text-sm mt-2">(Map integration would go here)</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="text-center">
          <p className="text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

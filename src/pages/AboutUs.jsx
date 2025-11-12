import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <img src="/assets/logo-cropped-128.png" alt="Sunny Meow Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Sunny Meow</h1>
        <p className="text-xl text-gray-600">Creating meaningful connections between cats and people since our founding</p>
      </div>

      {/* Mission Statement */}
      <div className="bg-orange-50 p-8 rounded-lg mb-8 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-orange-800">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Sunny Meow is a California registered nonprofit with 501(c)(3) pending, dedicated to promoting the
          mutual well-being of cats and people through community engagement, education, and
          therapeutic interaction.
        </p>
        <p className="text-lg text-gray-700">
          We provide a cozy space where visitors can enjoy quality time with
          our adoptable cats. Our space supports cat adoption and educates the community on
          responsible pet ownership.
        </p>
      </div>

      {/* What We Do */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-600">🏠 Cat Rescue & Adoption</h3>
            <p className="text-gray-600">
              We rescue cats in need and provide them with a safe, loving environment until they 
              find their forever homes. All of our cats are spayed/neutered, vaccinated, and 
              receive regular veterinary care.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-600">📚 Community Education</h3>
            <p className="text-gray-600">
              We offer workshops and resources on responsible pet ownership, cat behavior, and 
              the benefits of human-animal interaction. Our goal is to create informed, 
              compassionate pet owners.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-600">💆 Therapeutic Interactions</h3>
            <p className="text-gray-600">
              Studies show that spending time with cats reduces stress and anxiety. Our space
              provides a calming environment where visitors can experience the therapeutic
              benefits of feline companionship.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-600">🤝 Community Building</h3>
            <p className="text-gray-600">
              We host events, workshops, and social gatherings that bring together cat lovers 
              and create a supportive community united by their love for felines.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-blue-50 p-8 rounded-lg mb-8 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          Sunny Meow was founded by a group of passionate animal lovers who recognized
          the need for a space that benefits both cats and humans. We saw countless cats in
          shelters waiting for homes and people seeking connection and stress relief.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          By providing a welcoming space with adoptable cats, we created a unique
          environment where meaningful connections happen naturally. Whether someone adopts a cat,
          enjoys a peaceful time with feline friends, or simply learns more about cat care,
          every visit makes a difference.
        </p>
        <p className="text-lg text-gray-700">
          As a California registered nonprofit with 501(c)(3) pending, every donation directly supports our rescue
          operations, veterinary care, and educational programs. We're proud to be part of a
          growing movement that recognizes the value of human-animal bonds.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Impact</h2>
        <div className="text-center">
          <p className="text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>

      {/* Support Section */}
      <div className="text-center bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Support Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your visit, donation, or adoption helps us continue our important work. 
          Together, we can make a lasting difference in the lives of cats and people.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition">
            Donate Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
            Volunteer
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition">
            Adopt a Cat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

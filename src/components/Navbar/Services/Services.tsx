import React from 'react';

const Services: React.FC = () => {
  return (
    <div>
      <section className="bg-red-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to provide the highest quality cleaning services to ensure a clean, safe, and healthy environment for our clients. We strive to exceed customer expectations through our dedication to excellence and commitment to sustainability.
          </p>
        </div>
      </section>

      <section className="bg-yellow-500 text-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to be the leading cleaning service provider known for our innovative solutions and customer-centric approach. We aim to set the standard for cleanliness and hygiene in the industry.
          </p>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <ul className="text-lg list-disc pl-5">
            <li className="mb-2">Integrity: We operate with honesty and integrity in all that we do.</li>
            <li className="mb-2">Excellence: We are committed to delivering top-quality services.</li>
            <li className="mb-2">Sustainability: We prioritize eco-friendly practices in our operations.</li>
            <li className="mb-2">Customer Satisfaction: We aim to exceed our customers' expectations.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;

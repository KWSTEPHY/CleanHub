import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="w-screen">
      <section
        className="bg-cover bg-center relative w-screen mx-auto pt-15"
        style={{
          backgroundImage: `url('src/assets/pic 3.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "400px",
          width: "100%",
        }}
      >
        <div
          className="flex bg-black bg-opacity-50 text-white backdrop-filter backdrop-blur-sm mx-auto px-0"
          style={{
            backdropFilter: "blur(10px)",
            height: "400px",
            width: "100%",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-6xl font-bold px-6 py-8">
            Contact Us
          </h2>
        </div>
      </section>

      <section className="bg-white w-screen text-black py-20">
        <div className="w-full px-6">
          <h2 className="text-6xl font-bold mx-auto text-[#002147]">Our Mission</h2>
          <p className="text-lg mt-4">
            Our mission is to provide the highest quality cleaning services to
            ensure a clean, safe, and healthy environment for our clients. We
            strive to exceed customer expectations through our dedication to
            excellence and commitment to sustainability.
          </p>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-20">
        <div className="w-full px-6">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to be the leading cleaning service provider known for
            our innovative solutions and customer-centric approach. We aim to
            set the standard for cleanliness and hygiene in the industry.
          </p>
          <h2 className="text-4xl font-bold mb-4 mt-8">Our Values</h2>
          <ul className="text-lg list-disc pl-5">
            <li className="mb-2">
              Integrity: We operate with honesty and integrity in all that we
              do.
            </li>
            <li className="mb-2">
              Excellence: We are committed to delivering top-quality services.
            </li>
            <li className="mb-2">
              Sustainability: We prioritize eco-friendly practices in our
              operations.
            </li>
            <li className="mb-2">
              Customer Satisfaction: We aim to exceed our customers'
              expectations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contacts;


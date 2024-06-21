import React from "react";


const Services: React.FC = () => {
  const cardStyle =
    "rounded  shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center w-96 m-6";
  const cardStyleTwo =
    "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center w-3/5";

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
        }}>
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
          }}>
          <h2
            className="text-8xl font-bold mx-auto px-6 py-8"
            style={{
              fontStyle: "italic",
            }}>
            Our Services
          </h2>
        </div>
      </section>

      <section className="bg-blue-100 w-screen text-black py-20">
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-6">
              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/12.jpeg"
                  alt="Residential Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Residential Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>

              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/12.jpeg"
                  alt="Commercial Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Commercial Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>

              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/12.jpeg"
                  alt="Deep Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Deep Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>

              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/pic 3.jpeg"
                  alt="Carpet Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Carpet Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>

              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/12.jpeg"
                  alt="Office Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Office Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>

              <div className={cardStyle} style={{ position: "relative" }}>
                <img
                  src="/src/assets/pic 3.jpeg"
                  alt="Car Cleaning"
                  className="service-image rounded hover:zoom"
                />
                <div
                  className="service-details bg-white z-10 w-4/5 rounded ml-8"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "5",
                  }}>
                  <h3 className="font-bold text-2xl text-[#002147]">
                    Car Cleaning
                  </h3>
                  <div className="price-range text-l font-semibold text-[#53CCDC]">
                    Price Range: $50 - $100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center relative w-screen mx-auto pt-15 "
        style={{
          backgroundImage: `url('src/assets/pic 3.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "700px",
          width: "100%",
        }}>
        <div
          className="flex bg-black bg-opacity-50 text-white backdrop-filter backdrop-blur-sm mx-auto px-0"
          style={{
            backdropFilter: "blur(10px)",
            height: "700px",
            width: "100%",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="ml-96 w-full px-6">
            <div className={cardStyleTwo}>
              <h2 className="text-4xl font-bold text-center text-[#002147] mb-4 mt-10">
                Get an emergency call or appointment
              </h2>
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="mb-4 w-1/2">
                    <label
                      htmlFor="date"
                      className="block text-gray-700 font-bold mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4 w-1/2">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-bold mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      defaultValue=""
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline">
                      <option value="" disabled selected>
                        Select your service
                      </option>
                      <option value="CarCleaning">Car Cleaning</option>
                      <option value="CarpetCleaning">Carpet Cleaning</option>
                      <option value="CommercialCleaning">
                        Commercial Cleaning
                      </option>
                      <option value="DeepCleaning">Deep Cleaning</option>
                      <option value="OfficeCleaning">Office Cleaning</option>
                      <option value="ResidentialCleaning">
                        Residential Cleaning
                      </option>
                      <option value="WindowCleaning">Window Cleaning</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="bg-[#002147] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
                    type="button">
                    Submit
                  </button>
                </div>
              </form>
              <p className="text-lg mt-4 text-center whitespace-pre-wrap">
                info@webmail.com support@webmail.com jobs.@webmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

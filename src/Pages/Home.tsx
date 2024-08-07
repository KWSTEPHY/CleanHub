import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OfferCard from "../components/OfferCard";


const Home: React.FC = () => {
  const cardStyle =
    "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center max-w-xs";
  const cardStyleTwo =
    "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center w-3/5";

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="w-4/5">
              <Slider {...sliderSettings}>
                <div>
                <h2
  className="text-7xl font-bold mx-auto px-6 py-8 mt-8 text-center"
  style={{ fontStyle: "italic", maxWidth: "600px", whiteSpace: "normal" }}
>
  Welcome to<br/>Korda Lavare
</h2>


                </div>
                <div>
                  <h2
                    className="text-7xl font-bold mx-auto px-6 py-8 mt-8 text-center"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    Your Home for quality Cleaning Services
                  </h2>
                </div>
                <div>
                  <h2
                    className="text-7xl font-bold mx-auto px-6 py-8 mt-8 text-center"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    Experience the Best we have to offer
                  </h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 w-screen text-black py-20">
      <div className="relative flex items-center justify-center p-8 ">
      <h1> HOW IT WORKS </h1>
      </div>
        <div className="w-full px-6">
       
          <div className="flex justify-center m-4">
         
            <div className="grid grid-cols-4 gap-6">
              
              
              <div className={`${cardStyle} group w-64 h-72 p-4`}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-2 top-2.5 p-3 bg-white rounded-full shadow-md">
                    <h1 className="text-xs font-bold text-[#002147]">01</h1>
                  </div>
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <img
                      src="src/assets/logo.jpeg"
                      alt="Washing Machine Holding Clean T-Shirt"
                      className="h-24 w-24 transition-transform duration-300 rounded-full group-hover:scale-110"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#002147] mb-2 mt-10 text-center">
                  Create Account
                </h2>
              </div>

              <div className={`${cardStyle} group w-64 h-72 p-4`}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-2 top-2.5 p-3 bg-white rounded-full shadow-md">
                    <h1 className="text-xs font-bold text-[#002147]">02</h1>
                  </div>
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <img
                      src="src/assets/location3.jpeg"
                      alt="Washing Machine Holding Clean T-Shirt"
                      className="h-24 w-24 transition-transform duration-300 rounded-full group-hover:scale-110"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#002147] mb-2 mt-10 text-center">
                  Track Your Location
                </h2>
              </div>
              <div className={`${cardStyle} group w-64 h-72 p-4`}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-2 top-2.5 p-3 bg-white rounded-full shadow-md">
                    <h1 className="text-xs font-bold text-[#002147]">03</h1>
                  </div>
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <img
                      src="src/assets/cleaning services.jpeg"
                      alt="Washing Machine Holding Clean T-Shirt"
                      className="h-24 w-24 transition-transform duration-300 rounded-full group-hover:scale-110"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#002147] mb-2 mt-10 text-center">
                 Select Service
                </h2>
              </div>
              <div className={`${cardStyle} group w-64 h-72 p-4`}>
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-2 top-2.5 p-3 bg-white rounded-full shadow-md">
                    <h1 className="text-xs font-bold text-[#002147]">04</h1>
                  </div>
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <img
                      src="src/assets/experience.jpeg"
                      alt="Washing Machine Holding Clean T-Shirt"
                      className="h-24 w-24 transition-transform duration-300 rounded-full group-hover:scale-110"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#002147] mb-2 mt-10 text-center">
                  Share Your Experience
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="p-16 pt-24 flex space-x-8 text-[#002147]">
          <div className="img flex-shrink-0 w-2/5 pt-8 ">
            <img
              src="/src/assets/CCCLean.jpg"
              alt="Demo pic"
              className="rounded-xl shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div className="content flex-grow pt-16 text-left">
            <h2 className="text-l font-bold mb-4 text-left text-[#53CCDC]">
              About Us
            </h2>
            <p className="text-3xl mb-4 text-left font-bold ">
              Experiences on cleaning area with successful project ongoing.
            </p>
            <p className="mb-8 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <ul className="list-none mb-4 grid grid-cols-2 gap-x-4 gap-y-2 font-bold">
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Experienced Team
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Weekly or fortnightly
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All in all service
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Book, manage & pay
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>

            <div className="border-t-4 border-yellow-500 my-4"></div>

            <p className="mt-8 font-semibold">Rosalina D. William Founder</p>
          </div>
        </div>

        <div className="p-16 pt-24 flex space-x-8 text-[#002147]">
          <div className="content flex-grow pt-16 text-left">
            <h2 className="text-l font-bold mb-4 text-left text-[#53CCDC]">
              Why Choose Us
            </h2>
            <p className="text-4xl mb-4 text-left font-bold ">
              We Will Make Any Place Absolutely Clean, Neat.
            </p>
            <p className="mb-8 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <ul className="list-none mb-4 grid grid-cols-2 gap-x-4 gap-y-2 font-bold">
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Experienced Team
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Weekly or fortnightly
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All in all service
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Book, manage & pay
              </li>
            </ul>
          </div>
          <div className="img flex-shrink-0 w-2/5 pt-8 ">
            <img
              src="/src/assets/12.jpeg"
              alt="Demo pic"
              className="rounded-lg shadow-2xl w-48 h-48 object-cover relative top-3"
            />
            <img
              src="/src/assets/pic 3.jpeg"
              alt="Demo pic"
              className="rounded-xl shadow-2xl w-48 h-48 object-cover relative left-32 z-10"
            />
          </div>
        </div>
      </section>

      <section>
        <OfferCard />
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
        }}
      >
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
          }}
        >
          <div className="ml-80 w-full px-6">
            <div className={cardStyleTwo}>
              <h2 className="text-4xl font-bold text-center text-[#002147] mb-4 mt-10">
                Get an emergency call or appointment
              </h2>
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
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
                    className="block text-gray-700 font-bold mb-2"
                  >
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
                      className="block text-gray-700 font-bold mb-2"
                    >
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
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <input
                      type="message"
                      id="message"
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"
                    ></input>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="bg-[#002147] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
                    type="button"
                  >
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

export default Home;

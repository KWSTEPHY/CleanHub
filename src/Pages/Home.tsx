import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineSentimentSatisfiedAlt, MdOutlineLocalLaundryService } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";





const cardData = [
  {
    icon:<GiVacuumCleaner className="text-[#002147] ml-8 mt-4 w-20 h-20" />,
    title: "Property ",
    price: "$199",
    description: "One Time Installation",
    features: [
      "2 Bedrooms cleaning",
      "Vacuuming",
      "2 Bathroom cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
  { 
    icon:<MdOutlineLocalLaundryService className="text-[#002147] ml-6 mt-6 w-20 h-20" />,
    title: "Property ",
    price: "$299",
    description: "One Time Installation",
    features: [
      "3 Bedrooms cleaning",
      "Vacuuming",
      "3 Bathroom cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
  {
    icon:<SiCcleaner className="text-[#002147] ml-4 mt-6 w-20 h-20" />,
    title: "Property ",
    price: "$399",
    description: "One Time Installation",
    features: [
      "4 Bedrooms cleaning",
      "Vacuuming",
      "4 Bathroom cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
];


const Home: React.FC = () => {
  const cardStyle =
    "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center max-w-xs";
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
            Nyumbani
          </h2>
        </div>
      </section>

      <section className="bg-blue-100 w-screen text-black py-20">
        <div className="w-full px-6">
          <div className="flex justify-center m-4">
            <div className="grid grid-cols-4 gap-6">
              <div className={cardStyle}>
                <div className="p-6 bg-white rounded-full shadow-md">
                  <h1>01</h1>
                </div>

                <div className="p-6 bg-white rounded-full shadow-md">
                  <MdAccountCircle className="h-20 w-20 text-[#002147]" />
                </div>

                <h2 className="text-2xl font-bold text-[#002147] mb-4 mt-10">
                  Create Account
                </h2>
                <p className="text-lg mt-4 text-center">
                  info@webmail.com support@webmail.com jobs.@webmail.com
                </p>
              </div>
              <div className={cardStyle}>
                <div className="p-6 bg-white rounded-full shadow-md">
                  <h1>02</h1>
                </div>

                <div className="p-6 bg-white rounded-full shadow-md">
                  <ImLocation2 className="h-20 w-20 text-[#002147]" />
                </div>

                <h2 className="text-2xl text-center font-bold text-[#002147] mb-4 mt-10">
                  Track Location
                </h2>
                <p className="text-lg mt-4 text-center ">
                  (+254)803456675 (+254)712345874 (+254)123456992
                </p>
              </div>
              <div className={cardStyle}>
                <div className="p-6 bg-white rounded-full shadow-md">
                  <h1>03</h1>
                </div>

                <div className="p-6 bg-white rounded-full shadow-md">
                  <GiVacuumCleaner className="h-20 w-20 text-[#002147]" />
                </div>

                <h2 className="text-2xl font-bold text-[#002147] mb-4 mt-10">
                  Cleaning Services
                </h2>
                <p className="text-lg mt-4 text-center">
                  info@webmail.com support@webmail.com jobs.@webmail.com
                </p>
              </div>
              <div className={cardStyle}>
                <div className="p-6 bg-white rounded-full shadow-md">
                  <h1>04</h1>
                </div>

                <div className="p-6 bg-white rounded-full shadow-md">
                  <MdOutlineSentimentSatisfiedAlt className="h-20 w-20 text-[#002147]" />
                </div>

                <h2 className="text-2xl text-center font-bold text-[#002147] mb-4 mt-10">
                  Experience
                </h2>
                <p className="text-lg mt-4 text-center">
                  www.facebook.com www.twitter.com www.instagram.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-24 flex space-x-8 text-[#002147]">
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
                  xmlns="http://www.w3.org/2000/svg">
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
                  xmlns="http://www.w3.org/2000/svg">
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
                  xmlns="http://www.w3.org/2000/svg">
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
                  xmlns="http://www.w3.org/2000/svg">
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
      </section>
      {/* <section>
        <div className="bg-[#002147] p-8 flex justify-around items-start  ">
        {cardData.map((card, index) => (
              <div
                key={index}
                className="relative bg-white w-96 h-full  rounded-b-lg text-[#002147] shadow-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                <div className="absolute inset-x-0 -top-0 flex justify-center">
                  <div className="bg-blue-100 rounded-full w-32 h-32 mt-2">
                    {card.icon}
                  </div>
                </div>
                <div className=" bg-[#002147] h-16 m-0 w-96 "></div>
                <div className="pt-24 p-12 text-center ">
                  <h2 className="text-2xl font-bold mb-4 text-[#53CCDC]">
                    {card.title}
                  </h2>
                  <p className="text-6xl font-semibold">
                    {card.price}
                  </p>
                  <p className="text-gray-700 mb-4 mt-4">
                    {card.description}
                  </p>
                  <ul className="list-disc list-inside mb-4 text-left ml-16">
                    {card.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                      ))}
                      </ul>
                  <button
                    className="bg-[#002147] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
                    type="button">
                    Submit Request
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section> */}

<section>
  <div></div>
      <div className="bg-[#002147] p-8 flex justify-around items-start">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-white w-96 h-full rounded-b-lg  text-[#002147] shadow-lg group hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <div className="absolute inset-x-0 -top-0 flex justify-center">
              <div className="bg-blue-100 rounded-full w-32 h-32 mt-2 transition-all duration-300 ease-in-out group-hover:bg-white">
                {card.icon}
              </div>
            </div>
            <div className="bg-[#002147] h-16 m-0 w-full border border-transparent"></div>
            <div className="pt-24 p-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#53CCDC]">
                {card.title}
              </h2>
              <p className="text-6xl font-semibold">
                {card.price}
              </p>
              <p className="text-gray-700 mb-4 mt-4">
                {card.description}
              </p>
              <ul className="list-disc list-inside mb-4 text-left ml-16">
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className="bg-[#002147] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
                type="button">
                Submit Request
              </button>
            </div>
          </div>
        ))}
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
          <div className="ml-80 w-full px-6">
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
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2">
                      Message
                    </label>
                    <input
                      type="message"
                      id="message"
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#002147] text-white leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"></input>
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

export default Home;

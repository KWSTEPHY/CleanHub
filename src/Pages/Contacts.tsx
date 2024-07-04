import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoMdMegaphone } from "react-icons/io";

const Contacts: React.FC = () => {
  const cardStyle =
    "rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center ";
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
          <h2
            className="text-8xl font-bold mx-auto px-6 py-8"
            style={{
              fontStyle: "italic",
            }}
          >
            Contact Us
          </h2>
        </div>
      </section>

      <section className="bg-blue-100 w-screen text-black py-20">
        <div className="w-full px-6">
          <div className="flex justify-center m-4">
            <div className="grid grid-cols-4 gap-6">
            <div className={`${cardStyle} text-black w-64 h-64`}>
  <div className="p-4 bg-white rounded-full shadow-md">
    <MdOutlineAlternateEmail className="h-10 w-10" />
  </div>
  <h2 className="text-lg font-bold mb-2 mt-6">
    Email Address
  </h2>
  <p className="text-base mt-2 text-center">
    info@webmail.com support@webmail.com jobs.@webmail.com
  </p>
</div>


              <div className={`${cardStyle}text-black w-64 h-64`}>
                <div className="p-4 bg-white rounded-full shadow-md">
                  <LuPhoneCall className="h-10 w-10" />
                </div>
                <h2 className="text-lg font-bold mb-2 mt-6">
                  Phone Number
                </h2>
                <p className="text-base mt-2 text-center">
                  (+254)803456675 (+254)712345874 (+254)123456992
                </p>
              </div>
              <div className={`${cardStyle}text-black w-64 h-64`}>
                <div className="p-4 bg-white rounded-full shadow-md">
                  <RiHomeOfficeFill className="h-10 w-10" />
                </div>
                <h2 className="text-lg font-bold mb-2 mt-6">
                  Office Address
                </h2>
                <p className="text-base mt-2 text-center">
                  info@webmail.com support@webmail.com jobs.@webmail.com
                </p>
              </div>
              <div className={`${cardStyle}text-black w-64 h-64`}>
                <div className="p-4 bg-white rounded-full shadow-md">
                  <IoMdMegaphone className="h-10 w-10" />
                </div>
                <h2 className="text-lg font-bold mb-2 mt-6">
                  Social Connect
                </h2>
                <p className="text-base mt-2 text-center">
                  www.facebook.com www.twitter.com www.instagram.com
                </p>
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
              <h2 className="text-4xl font-bold text-center text-black mb-4 mt-10">
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"
                    ></input>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
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

export default Contacts;

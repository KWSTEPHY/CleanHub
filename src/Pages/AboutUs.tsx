import AboutUsCard from "../components/AboutUsCard";

const AboutUs = () => {
  const cardStyle =
    "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300";

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
            backdropFilter: "blur(5px)",
            height: "400px",
            width: "100%",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}>
          <h2
            className="text-8xl font-bold mx-auto px-6 py-8"
            style={{
              fontStyle: "italic",
            }}>
            About Us
          </h2>
        </div>
      </section>

      <section>
        <AboutUsCard  />
      </section>

{/* 
      <section className="bg-blue-100 w-screen text-black py-20 text-center justify-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`${cardStyle} hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg`}
              style={{ position: "relative" }}>
              <h2 className="text-4xl font-bold mb-4 text-[#002147]">
                Our Mission
              </h2>
              <p className="text-lg">
                Our mission is to provide the highest quality cleaning services
                to ensure a clean, safe, and healthy environment for our
                clients. We strive to exceed customer expectations through our
                dedication to excellence and commitment to sustainability.
              </p>
            </div>
            <div
              className={`${cardStyle} hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg`}
              style={{ position: "relative" }}>
              <h2 className="text-4xl font-bold mb-4 text-[#002147]">
                Our Vision
              </h2>
              <p className="text-lg">
                Our vision is to be the leading cleaning service provider known
                for our innovative solutions and customer-centric approach. We
                aim to set the standard for cleanliness and hygiene in the
                industry.
              </p>
            </div>
            <div
              className={`${cardStyle} hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg`}
              style={{ position: "relative" }}>
              <h2 className="text-4xl font-bold mb-4 text-[#002147]">
                Our Values
              </h2>
              <ul className="text-lg list-disc pl-5">
                <li className="mb-2">
                  Integrity: We operate with honesty and integrity in all that
                  we do.
                </li>
                <li className="mb-2">
                  Excellence: We are committed to delivering top-quality
                  services.
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

            <div className="border-t-4 border-black my-4"></div>

            <p className="mt-8 font-semibold">Rosalina D. William Founder</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

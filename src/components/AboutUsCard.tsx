

const cardData = [
    {
      head: " Our Mission",
      description: "Our mission is to provide the highest quality cleaning services to our clients. We strive to exceed customer expectations through our dedication to excellence and commitment to sustainability.",
    },
    {
      head: " Our Vision",
      description: " Our vision is to be the leading cleaning service provider known for our innovative solutions and customer-centric approach. We aim to set the standard for cleanliness and hygiene in the industry.",
    
    },
    {
      head: " Our Values",
      description: 
        " We operate with honesty and integrity in all that we do, are committed to delivering top-quality services and aim to exceed our customers' expectations.",
      
    },
  ];

  const AboutUsCard : React.FC = () => {

  // const cardStyleTwo =
  //   "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center w-3/5";

 return (
    <div className="bg-blue-100  p-10 flex justify-around items-start">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-white w-96 h-96 rounded-b-lg  text-[#002147] shadow-lg group hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              <div className="absolute  inset-x-0 -top-0 flex justify-center">
                <div className="bg-blue-100   rounded-full w-48 h-24 mt-2 transition-all duration-300 ease-in-out group-hover:bg-white">
                <h2 className="text-2xl font-bold ml-7 mt-8 text-[#002147]">
              {card.head}
            </h2>
                </div>
              </div>
              <div className="bg-blue-100 h-10 m-0 w-full border border-transparent"></div>
              <div className="pt-20 p-12 text-center">
            
                <p className="text-gray-700 text-xl mb-2 mt-2">
                    {card.description}
                </p>      
    
              </div>
            </div>
          ))}
        </div>
 );
};

export default AboutUsCard ;
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";

const cardData = [
    {
      icon: <GiVacuumCleaner className="text-[#002147] ml-6 mt-3 w-16 h-16" />,
      title: "Property ",
      price: "$199",
      description: "One Time Installation",
      features: [
        "2 Bdr/Bath cleaning",
        "Vacuuming",
        "Floor cleaning",
      ],
    },
    {
      icon: (
        <MdOutlineLocalLaundryService className="text-[#002147] ml-4 mt-4 w-16 h-16" />
      ),
      title: "Property ",
      price: "$299",
      description: "One Time Installation",
      features: [
        "3 Bds/Bath cleaning",
        "Vacuuming",
        "Floor cleaning",
      ],
    },
    {
      icon: <SiCcleaner className="text-[#002147] ml-3 mt-4 w-16 h-16" />,
      title: "Property ",
      price: "$399",
      description: "One Time Installation",
      features: [
        "4 Bdr/Bath cleaning",
        "Vacuuming",
        "Floor cleaning",
      ],
    },
  ];

  const OfferCard: React.FC = () => {

  // const cardStyleTwo =
  //   "rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center w-3/5";

 return (
    <div className="bg-blue-100  p-8 flex justify-around items-start">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-white w-96 h-96 rounded-b-lg  text-[#002147] shadow-lg group hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              <div className="absolute  inset-x-0 -top-0 flex justify-center">
                <div className="bg-blue-100   rounded-full w-24 h-24 mt-2 transition-all duration-300 ease-in-out group-hover:bg-white">
                  {card.icon}
                </div>
              </div>
              <div className="bg-blue-100 h-10 m-0 w-full border border-transparent"></div>
              <div className="pt-20 p-12 text-center">
                <h2 className="text-xl font-bold mb-2 text-[#53CCDC]">
                  {card.title}
                </h2>
                <p className="text-4xl font-semibold">{card.price}</p>
                <p className="text-gray-700 mb-2 mt-2">{card.description}</p>
                <ul className="list-disc list-inside mb-2 text-left ml-16">
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="bg-[#002147] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
                  type="button"
                >
                  Submit Request
                </button>
              </div>
            </div>
          ))}
        </div>
 );
};

export default OfferCard;
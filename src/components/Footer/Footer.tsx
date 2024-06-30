// import React from "react";
// import ItemsContainer from "./ItemsContainer";


// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#002147] text-white w-auto">
//       <div className="md:flex md:justify-between md:items-center gap-60 sm:px-12 px-4 bg-[#ffffff19] py-7">
//         <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
//           <span className="text-teal-400">Free</span> until you're ready to launch
//         </h1>
//         <div className="flex flex-col md:flex-row md:items-center md:w-3/5">
//           <input
//             type="text"
//             placeholder="Enter Your Phone.no"
//             className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
//           />
//           <button
//             className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
//           >
//             Request Code
//           </button>
//         </div>
//       </div>
//       <ItemsContainer />
//       <div className="bg-[#ffffff19] p-2 text-center">
//         <div className="container px-2">
//           <span className=" block justify-center  ">© 2024 . All rights reserved.</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-screen">
      
      <ItemsContainer />
      <div className="bg-[#ffffff19] p-2 text-center w-full">
        <div className="w-full px-2">
          <span className="block">© 2024 . All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

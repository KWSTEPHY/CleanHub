import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002147] text-white w-screen">
      
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

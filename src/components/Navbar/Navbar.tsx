import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black font-bold fixed w-screen top-0 z-10">
      <div className="w-full flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Koda Lavare</div>
        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <Link
              className="text-black font-bold text-xl hover:text-[#53CCDC]"
              to=""
            >
              Home
            </Link>
          </div>
          <div className="relative">
            <Link
              className="text-black font-bold text-xl hover:text-[#53CCDC]"
              to="/about-us"
            >
              About Us
            </Link>
          </div>
          <div className="relative">
            <Link
              className="text-black font-bold text-xl hover:text-[#53CCDC]"
              to="/services"
            >
              Services
            </Link>
          </div>
          <div className="relative">
            <Link
              className="text-black font-bold text-xl hover:text-[#53CCDC]"
              to="/contacts"
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

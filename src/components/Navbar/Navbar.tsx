
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
// import HomeSubmenu from "./SubMenu/HomeSubmenu1";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <nav className="bg-blue-500 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="hover:bg-blue-700 px-3 py-2 rounded-md"
            >
              Home
            </button>
            {dropdownOpen === "home" && (
              <div className="absolute bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                <Link to="/home/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                  HomeSubmenu1 
                </Link>
                <Link to="/home/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                  HomeSubmenu2 
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="hover:bg-blue-700 px-3 py-2 rounded-md"
            >
              About Us
            </button>
            {dropdownOpen === "about" && (
              <div className="absolute bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                <Link to="/about/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 1
                </Link>
                <Link to="/about/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="hover:bg-blue-700 px-3 py-2 rounded-md"
            >
              Services
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                <Link to="/services/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 1
                </Link>
                <Link to="/services/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("contacts")}
              className="hover:bg-blue-700 px-3 py-2 rounded-md"
            >
              Contacts
            </button>
            {dropdownOpen === "contacts" && (
              <div className="absolute bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                <Link to="/contacts/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 1
                </Link>
                <Link to="/contacts/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                  Submenu 2
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl hover:bg-blue-700 p-2 rounded-md"
          >
            <HiMenu />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("home")}
                className="hover:bg-blue-700 w-full text-left px-3 py-2 rounded-md"
              >
                Home
              </button>
              {dropdownOpen === "home" && (
                <div className="bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                  <Link to="/home/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 1
                  </Link>
                  <Link to="/home/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="hover:bg-blue-700 w-full text-left px-3 py-2 rounded-md"
              >
                About Us
              </button>
              {dropdownOpen === "about" && (
                <div className="bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                  <Link to="/about/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 1
                  </Link>
                  <Link to="/about/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="hover:bg-blue-700 w-full text-left px-3 py-2 rounded-md"
              >
                Services
              </button>
              {dropdownOpen === "services" && (
                <div className="bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                  <Link to="/services/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 1
                  </Link>
                  <Link to="/services/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("contacts")}
                className="hover:bg-blue-700 w-full text-left px-3 py-2 rounded-md"
              >
                Contacts
              </button>
              {dropdownOpen === "contacts" && (
                <div className="bg-white text-blue-500 mt-2 rounded-md shadow-lg">
                  <Link to="/contacts/submenu1" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 1
                  </Link>
                  <Link to="/contacts/submenu2" className="block px-4 py-2 hover:bg-blue-100">
                    Submenu 2
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-[#002147] font-bold fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <Link
              onClick={() => toggleDropdown("home")}
              className="text-[#002147] font-bold text-xl hover:text-[#53CCDC]"
              to=""
            >
              Home
            </Link>
          </div>
          <div className="relative">
            <Link
              onClick={() => toggleDropdown("about")}
              className="text-[#002147] font-bold text-xl hover:text-[#53CCDC]"
              to=""
            >
              About Us
            </Link>
          </div>
          <div className="relative">
            <Link
              onClick={() => toggleDropdown("services")}
              className="text-[#002147] font-bold text-xl hover:text-[#53CCDC]"
              to=""
            >
              Services +
            </Link>
            {dropdownOpen === "services" && (
              <div
                ref={dropdownRef}
                className="absolute bg-white text-[#002147] mt-2 rounded-md shadow-lg"
              >
                <Link
                  to="/services/submenu1"
                  className="text-[#002147] font-bold  hover:text-[#53CCDC] block px-2 py-4"
                >
                  Services
                </Link>
                <Link
                  to="/services/submenu2"
                  className="text-[#002147] font-bold  hover:text-[#53CCDC] block px-2 py-0.5"
                >
                  Services Details
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <Link
              onClick={() => toggleDropdown("contacts")}
              className="text-[#002147] font-bold text-xl hover:text-[#53CCDC]"
              to=""
            >
              Contacts +
            </Link>
            {dropdownOpen === "contacts" && (
              <div
              ref={dropdownRef}
               className="absolute bg-white text-[#002147] mt-2 rounded-md shadow-lg">
                <Link
                  to="/contacts/submenu1"
                  className="text-[#002147] font-bold  hover:text-[#53CCDC] block px-2 py-2"
                >
                  Submenu 1
                </Link>
                <Link
                  to="/contacts/submenu2"
                  className="text-[#002147] font-bold hover:text-[#53CCDC] block px-2 py-0.5"
                >
                  Submenu 2
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
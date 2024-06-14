import React, { useState } from "react";
import { FaHome, FaUser, FaComments, FaCamera, FaCog } from "react-icons/fa";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: FaHome, dis: "translate-x-0" },
    { name: "Profile", icon: FaUser, dis: "translate-x-16" },
    { name: "Message", icon: FaComments, dis: "translate-x-32" },
    { name: "Photos", icon: FaCamera, dis: "translate-x-48" },
    { name: "Settings", icon: FaCog, dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white w-full fixed top-0 z-10 shadow-md h-24">
      <div className="flex justify-center items-center relative h-30">
        {Menus.map((menu, i) => (
          <div key={i} className="w-16 text-center pt-6">
            <button
              className={`text-xl cursor-pointer duration-500 ${
                i === active ? "-mt-6 text-white" : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span className="inline-block">{menu.icon()}</span>
            </button>
            <span
              className={`block ${
                active === i
                  ? "translate-y-4 duration-700 opacity-100"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {menu.name}
            </span>
          </div>
        ))}
        <div
          className={`bg-rose-600 duration-500 absolute ${Menus[active].dis} border-4 border-gray-900 h-16 w-16
          -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-7 rounded-tr-lg shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-7 rounded-tl-lg shadow-myShadow2"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

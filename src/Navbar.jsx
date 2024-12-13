import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons if not installed

const Navbar = ({ name, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effect to close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="flex justify-between items-center mb-16 px-4 py-8 lg:px-8">
      <div className="flex items-center">
        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-yellow-500 rounded-full mr-2"></div>
        <NavLink to="/">
          <h1 className="text-lg lg:text-xl font-bold">{name}</h1>
        </NavLink>
        <span className="ml-2 text-gray-600 text-sm lg:text-base">{title}</span>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu */}
      <nav
        ref={menuRef} // Attach the ref to the nav element
        className={`lg:block ${isOpen ? "block" : "hidden"} absolute lg:static top-16 right-0 bg-white lg:bg-transparent w-full lg:w-auto shadow-lg lg:shadow-none`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center lg:text-left p-4 lg:p-0">
          <li className="mb-4 lg:mb-0">
            <NavLink
              to="/resume"
              onClick={closeMenu} // Close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-bold"
                  : "hover:text-[#EBB305] text-xs lg:text-base transition-colors"
              }
            >
              RESUME
            </NavLink>
          </li>
          <li className="mb-4 lg:mb-0">
            <NavLink
              to="/projects"
              onClick={closeMenu} // Close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-bold"
                  : "hover:text-[#EBB305] text-xs lg:text-base transition-colors"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="mb-4 lg:mb-0">
            <NavLink
              to="/certification"
              onClick={closeMenu} // Close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-bold"
                  : "hover:text-[#EBB305] text-xs lg:text-base transition-colors"
              }
            >
              CERTIFICATION
            </NavLink>
          </li>
          <li className="mb-4 lg:mb-0">
            <NavLink
              to="/contact"
              onClick={closeMenu} // Close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-bold"
                  : "hover:text-[#EBB305] text-xs lg:text-base transition-colors"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = ({ about, image }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8 sm:px-8 md:px-12 lg:px-16">
        <main className="flex flex-col items-center md:flex-row md:justify-center mb-16">
          
          {/* Profile Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-center pr-4 mt-14 sm:mt-0">
            <img 
              src={image} 
              alt="Profile" 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] object-cover rounded-full shadow-lg transition-all duration-300 ease-in-out" 
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center md:pl-4 max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-14 sm:mt-0">Hello👋🏻</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">I'm Simran</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">{about}</p>

            {/* Links Section */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/resume" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-yellow-500 text-white rounded-full text-xs sm:text-sm md:text-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Resume
              </Link>
              <Link 
                to="/projects" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-red-500 text-white rounded-full text-xs sm:text-sm md:text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs sm:text-sm md:text-lg font-semibold hover:bg-teal-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;

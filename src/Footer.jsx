import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = ({ phone, email, name }) => {
  return (
    <footer className="py-8 bg-[#e6e6e6]"> {/* Set footer background color to match main background */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base">Phone: {phone}</p>
          <p className="text-sm md:text-base">Email: <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a></p>
        </div>
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="mb-2 text-sm md:text-base">Follow Me</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/simran-manturgimath/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon hover:text-blue-600" size={24} />
            </a>
            <a href="https://github.com/Simran-RM" target="_blank" rel="noopener noreferrer">
              <Github className="social-icon hover:text-gray-500" size={24} />
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center md:text-right mt-4 md:mt-0">
          © {new Date().getFullYear()} By {name}.<br />
          Powered by React
        </div>
      </div>
    </footer>
  );
};

export default Footer;

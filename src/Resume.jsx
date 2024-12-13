// src/components/Resume.jsx

import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Code } from 'lucide-react';

const ResumeHeader = ({ name, title, email, phone, pdfUrl }) => (
  <div className="bg-[#e6e6e6] p-6 rounded-lg shadow-2xl mb-6 w-full text-center">
    <h1 className="text-3xl sm:text-4xl font-bold mb-2">{name}</h1>
    <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">{title}</h2>
    <p className="mb-1 text-sm sm:text-base">📧 {email}</p>
    <p className="mb-4 text-sm sm:text-base">📞 {phone}</p>
    <a
      href={pdfUrl}
      download
      className="bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center justify-center hover:bg-yellow-600 transition-colors"
    >
      <Download className="mr-2 bg-yellow-500" size={18} />
      Download Resume
    </a>
  </div>
);

const NavLinks = ({ activeSection, setActiveSection }) => (
  <nav className="top-16 bg-[#e6e6e6] z-20 mb-4 border-b w-full text-center">
    <ul className="flex justify-around py-2">
      {[
        { name: 'Experience', icon: Briefcase },
        { name: 'Education', icon: GraduationCap },
        { name: 'Skills', icon: Code }
      ].map(({ name, icon: Icon }) => (
        <li key={name}>
          <button
            onClick={() => setActiveSection(name)}
            className={`px-2 sm:px-3 py-1 flex items-center justify-center ${
              activeSection === name
                ? 'text-yellow-500 font-bold border-b-2 border-yellow-500'
                : 'text-gray-600 hover:text-yellow-500'
            }`}
          >
            <Icon className="mr-2" size={18} />
            {name}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

const FlipCardComponent = ({ title, skills }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
    className="flip-card h-24 sm:h-[150px] w-[250px] mb-4"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front bg-yellow-500 text-white flex items-center justify-center rounded-xl shadow-xl sm:bg-yellow-500">
          <h3 className="text-xl font-bold bg-yellow-500">{title}</h3>
        </div>
        <div className="flip-card-back  bg-[#e6e6e6] flex items-center justify-center rounded-lg shadow-xl">
          <ul className="px-4 py-2 list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="text-black text-sm">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Embedded CSS for Flip Card */}
      <style>
        {`
          .flip-card {
            perspective: 1000px;
            cursor: pointer;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            
            border-radius: 0.5rem; /* Tailwind's rounded-lg */
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

const Resume = ({ resumeData, pdfUrl }) => {
  const [activeSection, setActiveSection] = useState('Experience');

  return (
    <div className="min-h-screen bg-[#e6e6e6] pt-24 pb-8 w-full">
      {/* Added pt-24 to account for fixed Navbar height */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-[-100px] lg:px-8">
        <ResumeHeader
          name={resumeData.name}
          title={resumeData.title}
          email={resumeData.email}
          phone={resumeData.phone}
          pdfUrl={pdfUrl}
        />
        <NavLinks activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="bg-[#e6e6e6] rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start w-full">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{activeSection}</h2>
            </div>
            <div className="md:w-3/4">
              {activeSection === 'Experience' && (
                <div>
                  {resumeData.experience.map((job, index) => (
                    <div key={index} className="mb-6 flex flex-col md:flex-row">
                      <div className="md:w-1/4 pr-4 text-right mb-2 md:mb-0">
                        <p className="text-gray-600 text-sm">{job.date}</p>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                        <p className="text-gray-700 mb-2">{job.company}</p>
                        
                          {job.responsibilities.map((resp, idx) => (
                            <p key={idx} className="text-gray-700 mb-1 text-sm">{resp}</p>
                          ))}
                       
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'Education' && (
                <div>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4 flex flex-col md:flex-row">
                      <div className="md:w-1/4 pr-4 text-right mb-2 md:mb-0">
                        <p className="text-gray-600 text-sm">{edu.date}</p>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-gray-700 font-extrabold italic">{edu.school}</p>
                        <p className="text-gray-500 italic mt-2">Courses: {edu.courses}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

{activeSection === 'Skills' && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Stacks on smaller screens, two columns on larger */}
    {Object.entries(resumeData.skills).map(([category, skills]) => (
      <div key={category}>
        <FlipCardComponent title={category} skills={skills} />
      </div>
    ))}
  </div>
)}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

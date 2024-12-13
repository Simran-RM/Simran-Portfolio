import React, { useState } from 'react';
import { Code, Palette } from 'lucide-react';

const ProjectCard = ({ title, image, technologies, description, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[400px] sm:h-[450px] md:h-[500px] mb-8 shadow-2xl rounded-2xl " onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front bg-[#dfe0e0] text-black rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
          <img src={image} className="w-[200px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[220px] md:h-[250px] object-fill rounded-lg mb-4 mt-[-10px] shadow-xl bg-[#dfe0e0]" loading="lazy"/>
          <h3 className="text-lg sm:text-xl font-bold bg-[#DBDCDC] mb-2">{title}</h3>
          <p className="text-xs sm:text-sm bg-[#dfe0e0] text-gray-600 italic">{technologies.join(', ')}</p>
          <a href={link} className='mt-4 sm:mt-6 bg-[#dfe0e0] text-blue-500 underline text-sm' target='_blank'>View project</a>
        </div>
        <div className="flip-card-back bg-yellow-500 rounded-lg shadow-xl p-4 sm:p-6 flex items-center justify-center">
          <p className="text-black text-center bg-yellow-500 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ArtCard = ({ image }) => (
  <div className="w-full mb-8">
    <img src={image} className="w-full sm:w-[350px] md:w-[450px] lg:w-[550px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-lg shadow-2xl mb-2 bg-[#e8eef0]" loading="lazy" />
  </div>
);

const Projects = ({ technicalProjects = [], artProjects = [] }) => {
  const [activeSection, setActiveSection] = useState('Technical Projects');

  return (
    <div className="min-h-screen bg-[#e6e6e6] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 mt-[-50px] text-center text-[#2C3E50]">My Projects</h1>
        <nav className="sticky top-0 bg-[#e6e6e6] z-10 mb-8 border-b w-full">
          <ul className="flex justify-around py-2">
            {[
              { name: 'Technical Projects', icon: Code },
              { name: 'Art Gallery', icon: Palette }
            ].map(({ name, icon: Icon }) => (
              <li key={name}>
                <button
                  onClick={() => setActiveSection(name)}
                  className={`px-2 sm:px-3 py-1 flex items-center text-sm sm:text-base ${
                    activeSection === name
                      ? 'text-yellow-500 font-bold border-b-2 border-yellow-500'
                      : 'text-gray-600 hover:text-yellow-500'
                  }`}
                >
                  <Icon className="mr-1 sm:mr-2" size={16} />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {activeSection === 'Art Gallery' && (
          <div className="mb-8 sm:mb-12">
            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              Beyond my technical skills, I find joy in letting creativity flow onto my digital canvas. Bringing my imagination to life through art is a passion that fuels my technical creativity in return. This Art gallery showcases some of my favorite pieces, each a window into my artistic world.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {activeSection === 'Technical Projects' &&
            technicalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          {activeSection === 'Art Gallery' &&
            artProjects.map((art, index) => (
              <ArtCard key={index} {...art} />
            ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .flipped {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Projects;
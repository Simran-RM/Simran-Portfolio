import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import aws from './assets/logos/aws.png';
import atlassian from './assets/logos/atlassian.png';
import cisco_e from './assets/logos/cisco_e.png';
import cisco_i from './assets/logos/cisco_i.png';

const CertificationCard = ({ title, issuer, date, logo, badge, description, skills, isActive, currentIndex, totalCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`bg-[#e6e6e6] certification-card ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className={`card-inner bg-[#e6e6e6] ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front">
          <img src={logo} alt={`${issuer} logo`} className="w-16 h-16 md:w-[120px] md:h-[120px] mb-2 md:mb-4 object-contain bg-white" loading="lazy"/>
          <h3 className="text-base md:text-xl font-bold text-center bg-white">{title}</h3>
          <p className="text-gray-600 text-xs md:text-sm font-bold mt-1 md:mt-2 bg-white">{issuer}</p>
          <p className="text-gray-500 text-xs mt-1 bg-white">{date}</p>
          <a className="text-blue-500 text-xs mt-1 bg-white underline" href={badge} target='_blank'>View Badge</a>
          <p className="absolute bottom-1 md:bottom-2 right-1 md:right-2 text-[10px] md:text-xs text-gray-500 bg-white">
            {currentIndex + 1} of {totalCards}
          </p>
        </div>
        <div className="card-face card-back bg-[#FFFEF0]">
          <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 bg-[#FFFEF0]">Description</h4>
          <p className="text-[10px] md:text-xs mb-2 md:mb-4 bg-[#FFFEF0]">{description}</p>
          <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 bg-[#FFFEF0]">Skills</h4>
          <div className="flex flex-wrap gap-1 md:gap-2 bg-[#FFFEF0]">
            {skills.map((skill, index) => (
              <span key={index} className="text-[10px] md:text-xs bg-yellow-200 text-black px-1 md:px-2 py-0.5 md:py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <p className="absolute bottom-1 md:bottom-2 right-1 md:right-2 text-[10px] md:text-xs text-gray-500 bg-[#FFFEF0]">
            {currentIndex + 1} of {totalCards}
          </p>
        </div>
      </div>
    </div>
  );
};

const Certification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Issued: September 2024",
      logo: aws,
      badge:'https://www.credly.com/badges/cd0a9ba8-279b-48ce-9075-f181c85185b0/public_url',
      description: "Demonstrated expertise in AWS cloud fundamentals, covering key services, architecture best practices, security, and cost management. Certified to navigate and optimize cloud environments, ensuring scalable and secure infrastructure for businesses.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Billing and Pricing","Cloud Deployment"]
    },
    {
      title: "Jira Fundamental Badge",
      issuer: "Atlassian",
      date: "Issued: Feb 2023",
      logo: atlassian ,
      badge:'https://university.atlassian.com/student/award/zoR6VKbb2YYfd2sDgD2MfUtK',
      description: "Demonstrates proficiency in Jira administration and project management, including configuring projects, managing workflows, and optimizing Jira for team productivity.",
      skills: ["Jira", "Project Management", "Agile Methodologies", "Workflow Optimization"]
    },
    {
      title: "Cisco Cybersecurity Essentials",
      issuer: "Cisco",
      date: "Issued: Mar 2021",
      logo: cisco_e,
      badge:'https://www.credly.com/badges/57e6dad5-ba7a-47fa-a570-6a43c667e990/public_url',
      description: "Mastered the fundamentals of cybersecurity, including the detection of threats, risk mitigation, and securing networks. Gained hands-on expertise in identifying vulnerabilities, implementing security policies, and safeguarding data integrity in modern network environments. ",
      skills: ["Network Security","Data Protection","Threat Detection",  "Risk Mitigation"]
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Issued: Mar 2021",
      logo: cisco_i,
      badge:'https://www.credly.com/badges/98edf1a8-9c24-41e5-9ad7-5c0933fcf7d4/public_url',
      description: "Acquired a strong foundation in the principles of cybersecurity, including the key concepts of securing information, understanding cyber threats, and the essentials of network protection.",
      skills: ["Cybersecurity Fundamentals", "Digital Safety", "Information Security", "Security Best Practices"]
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className="min-h-screen py-4 md:py-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#2C3E50] mb-12 md:mb-[120px] mt-[-300px] md:mt-[-200px]">My Certifications</h1>
      <div className="carousel-container">
        <button onClick={prevCard} className="carousel-button left "><ChevronLeft size={20} /></button>
        <div className="carousel" style={{ transform: `rotateY(${-currentIndex * (360 / certifications.length)}deg)` }}>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
              isActive={index === currentIndex}
              currentIndex={index}
              totalCards={certifications.length}
            />
          ))}
        </div>
        <button onClick={nextCard} className="carousel-button right"><ChevronRight size={20} /></button>
      </div>
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 240px;
          height: 320px;
          perspective: 1000px;
        }
        @media (min-width: 768px) {
          .carousel-container {
            width: 300px;
            height: 400px;
          }
        }
        .carousel {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        .certification-card {
          position: absolute;
          width: 200px;
          height: 280px;
          left: 20px;
          top: 20px;
          transition: all 0.3s;
          opacity: 0.7;
          transform-origin: center;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .certification-card {
            width: 250px;
            height: 350px;
            left: 25px;
            top: 25px;
          }
        }
        .certification-card.active {
          opacity: 1;
          z-index: 1;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
        }
        @media (min-width: 768px) {
          .card-face {
            padding: 20px;
            border-radius: 10px;
          }
        }
        .card-front {
          background-color: white;
        }
        .card-back {
          background-color: #FFFEF0;
          transform: rotateY(180deg);
        }
        .is-flipped {
          transform: rotateY(180deg);
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 10;
          background-color: transparent;
          transition: background-color 0.3s, color 0.3s;
        }
          .carousel-button:hover {
          background-color: rgba(230, 230, 230, 0.3);
        }
        @media (min-width: 768px) {
          .carousel-button {
            width: 40px;
            height: 40px;
          }
        }
        .carousel-button.left { left: -40px; }
        .carousel-button.right { right: -40px; }
        @media (min-width: 768px) {
          .carousel-button.left { left: -60px; }
          .carousel-button.right { right: -60px; }
        }
        .certification-card:nth-child(1) { transform: rotateY(0deg) translateZ(200px); }
        .certification-card:nth-child(2) { transform: rotateY(90deg) translateZ(200px); }
        .certification-card:nth-child(3) { transform: rotateY(180deg) translateZ(200px); }
        .certification-card:nth-child(4) { transform: rotateY(270deg) translateZ(200px); }
        @media (min-width: 768px) {
          .certification-card:nth-child(1) { transform: rotateY(0deg) translateZ(250px); }
          .certification-card:nth-child(2) { transform: rotateY(90deg) translateZ(250px); }
          .certification-card:nth-child(3) { transform: rotateY(180deg) translateZ(250px); }
          .certification-card:nth-child(4) { transform: rotateY(270deg) translateZ(250px); }
        }
      `}</style>
    </div>
  );
};

export default Certification;
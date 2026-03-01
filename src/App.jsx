// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Projects from "./Projects";
import { technicalProjects, artProjects } from "./projectsData";
import Contact from "./Contact";
import Certification from "./Certification";
// import myImage from "./assets/me2.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import resumeData from "./ResumeData.json";
// import resumePdf from "./assets/Simran_RM.pdf";
const myImage = "/assets/me2.jpeg";
const resumePdf = "/assets/SimranRM_Fullstack_Resume.pdf";





const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "spring",
  damping: 13, // Controls the amount of bounciness; lower values = more bounciness
  stiffness: 120, // Controls the speed of the spring; higher values = faster movement
  mass: 1,
  ease: "anticipate",
  duration: 0.7
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar name="Simran Manturgimath" title="Software Developer" />
      <main className="flex-grow pt-16">
        <PageWrapper>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Portfolio
                  className="pt-4"
                  about="AWS Certified Cloud Practitioner and full-stack software engineer experienced in building scalable backend systems and intuitive web interfaces. I design and develop REST APIs using Python and JavaScript, implement containerised deployments and CI/CD pipelines, and build responsive frontends with React. I enjoy working across the stack — from architecting reliable backend services to crafting seamless user experiences — ensuring systems are efficient, maintainable, and production-ready. "
                  image={myImage}
                />
              }
            />
            <Route
              path="/resume"
              element={<Resume resumeData={resumeData} pdfUrl={resumePdf} />}
            />
            <Route path="/projects" element={<Projects technicalProjects={technicalProjects} artProjects={artProjects} />} />
            <Route path="/certification" element={<Certification/>}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer
        phone="+91 8904291793"
        email="simran.rm6@gmail.com"
        name="Simran Manturgimath"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

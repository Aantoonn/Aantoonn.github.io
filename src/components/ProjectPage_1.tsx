import React, { useState, useEffect } from "react";
import { Navigation, Footer } from "../components"; // Importera Navigation och Footer
import FadeIn from '../components/FadeIn'; // Importera FadeIn
import './ProjectPage_1.scss'; // Om du vill ha samma styling

const ProjectPage_1 = () => {
    const [mode, setMode] = useState<string>('dark'); // Hantera dark/light mode
  
    const handleModeChange = () => {
      setMode(mode === 'dark' ? 'light' : 'dark');
    };
  
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
  
    return (
        <div className={`project-page-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
          {/* Här kan du lägga till projektets specifika innehåll */}
          <div className="project-page-content">
            <h1>Project SimSims</h1>
            <p>This project involves developing a simulation model for SimSims, 
            built upon a modified version of Petri nets. Petri nets are a well-known method for modeling and analyzing the flow of processes, 
            often used to represent and analyze dynamic systems.

            In this case, a modified version of the Petri net is used to create a more complex and flexible simulation capable of 
            handling various types of systems and scenarios. The project incorporates several technical concepts and methods to make 
            the simulation as realistic and efficient as possible: Inheritance Hierachy, Analysis, Serialization, Graphical User Interface (GUI), Multithreaded simulation and Adaptive Networks</p>
            {/* Lägg till mer specifikt innehåll för det här projektet */}
          </div>
        </FadeIn>
        <Footer />
      </div>
    );
  };
  
  export default ProjectPage_1;
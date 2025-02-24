import React, {useState, useEffect} from "react";
import {
  Main,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage_1 from "./components/ProjectPage_1"; // Importera den nya ProjectPage-komponenten


function App() {
    const [mode, setMode] = useState<string>('dark');
    const handleModeChange = () => {
      if (mode === 'dark') {
        setMode('light');
      } else {
        setMode('dark');
      }
    }
  
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
  
    return (
      <Router> {/* Omslut din app med Router */}
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
          <FadeIn transitionDuration={700}>
            <Routes>
              <Route path="/" element={<><Main /><Expertise /><Project /></>} /> {/* Standard sida */}
              <Route path="/project1" element={<ProjectPage_1 />} /> {/* Länk till den nya projektsidan */}
            </Routes>
          </FadeIn>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
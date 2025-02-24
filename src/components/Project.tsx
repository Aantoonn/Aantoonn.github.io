import React from "react";
import '../assets/styles/Project.scss';
import '../assets/images/project_1.png'
import { Link } from "react-router-dom";

const Project: React.FC = () => {
    return (
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            {/* Länka till den nya ProjectPage via React Router */}
            <Link to="/project1">
              <img
                src={require("../assets/images/project_1.png")}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </Link>
            <Link to="/project1">
              <h2>SimSims Simulation - In progress</h2>
            </Link>
            <p>
              Developing a simulation of 'SimSims' which is using a
              modified version of 'petri-net' using Inheritance hierarchy, analysis,
              serialization, graphical user interface, multithreaded simulation, and
              adaptive networks.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Project;
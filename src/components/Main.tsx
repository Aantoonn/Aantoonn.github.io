import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {
  const fullName = "Anton Maksymchuk Netterström";
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let isMounted = true; // För att undvika tillståndsuppdateringar efter avmontering

    const typeWriter = async () => {
      setDisplayName(""); // Återställ displayName till en tom sträng
      for (let i = 0; i < fullName.length; i++) {
        if (!isMounted) return; // Avbryt om komponenten har avmonterats
        setDisplayName((prev) => prev + fullName.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Fördröjning på 100ms
      }
    };

    typeWriter();

    return () => {
      isMounted = false; // Markera att komponenten har avmonterats
    };
  }, [fullName]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={require("../assets/images/cropped-portfolio.jpeg")} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.instagram.com/aantoonn/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
          <h1 className="typewriter">{displayName}</h1>
          <p>AI & Machine Learning Engineering Student</p>

          <div className="mobile_social_icons">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
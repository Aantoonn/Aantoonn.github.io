import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="about-me">
        <div className="skills-container">
            <h1>About me</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faUser} size="3x"/>
                    <h3>Who am i?</h3>
                    <p>My name is Anton Maksymchuk Netterström and born in Sweden, and I am currently in the first year in AI and Machine Learning at Blekinge Institute of Technology (BTH). My passion for technology and mathematics drives me to explore and innovate within this field. </p>

                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Interests</h3>
                    <p> I have a strong interest in programming, especially in Python. In addition to that, I am skilled in SQL and frequently use LaTeX for documentation and Matplotlib for data visualization.</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faStar} size="3x"/>
                    <h3>Outside school</h3>
                    <p>I love traveling and discovering new cultures while meeting new people. It allows me to broaden my perspectives and learn from diverse experiences. Exploring the world and connecting with others plays an important role in my personal growth and development.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
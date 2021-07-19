import { useState } from 'react';
import projects from './Templates';
import './Portfolio.css';


const Portfolio = () => {
    const [projectType, setProjectType] = useState("fullstack");

    return (
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <h3 className="portfolio-header">Portfolio</h3>
                <div className="selector-box">
                    <select 
                    aria-label="project-type-selector"
                    value={projectType} 
                    onChange={(event) => setProjectType(event.target.value)}
                    >
                            <option value="fullstack">Full-Stack</option>
                            <option value="frontend">Front-End</option>
                    </select>
                </div>
                {projects[projectType]}
            </div>
        </div>
    );
}

export default Portfolio;
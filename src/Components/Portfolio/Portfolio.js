import { useState } from 'react';
import projects from './Templates';
import './Portfolio.css';


const Portfolio = () => {
    const [projectType, setProjectType] = useState("fullstack");

    return (
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <h3 className="portfolio-header">Portfolio</h3>
                <label> 
                    Project Type:
                    <select value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                        <option value="fullstack">Full-Stack</option>
                        <option value="frontend">Front-End</option>
                    </select>
                </label>
                {projects[projectType]}
            </div>
        </div>
    );
}

export default Portfolio;
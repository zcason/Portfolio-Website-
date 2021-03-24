import './Tools.css';
import psqlIcon from '../../Images/postgresql.png';
import expressIcon from '../../Images/express-js.png';
import reactIcon from '../../Images/react-js.png';
import nodeIcon from '../../Images/node-js.png';
import jsIcon from '../../Images/js.png';
import adobeXdIcon from '../../Images/adobe-xd.png';



const Tools = () => {
    return (
        <div id="tools" className="tools-section">
            <div className= "tools-container">
                <h2 className="tools-header">Tools</h2>
                <div className="tool-icons">
                    <div className="icon-row">
                        <img src={psqlIcon} alt="PostgreSQL" />
                        <img src={expressIcon} alt="Express.js" />
                        <img src={reactIcon} alt="React.js" />
                    </div>
                    <div className="icon-row">
                        <img src={nodeIcon} alt="Node.js" />
                        <img src={jsIcon} alt="JavaScript" />
                        <img src={adobeXdIcon} alt="Adobe XD" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import './Services.css';

const Services = () => {
    return (
        <div id="services" className="services-section">
            <div className= "services-container">
                <h2 className="services-header">Services</h2>
                <div className="provided-services">
                    <div className="icon-container">
                        <h3>Web Dev</h3>
                        <MdIcons.MdWeb className="icons" />
                    </div>
                    <div className="icon-container">
                        <h3>Mobile Dev</h3>
                        <AiIcons.AiOutlineMobile className="icons" />
                    </div>
                    <div className="icon-container">
                        <h3>Backend Dev</h3>
                        <BiIcons.BiServer className="icons" />   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
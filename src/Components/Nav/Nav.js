import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai';
import './Nav.css';



const Nav = () => {
    return (
        <header>
            <div className="nav-container">
                {/* <h3>Portfolio</h3> */}
                <nav>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about-me'>About Me</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#tools'>Tools</a></li>
                        <a href="mailto:zuri.cason@gmail.com">
                            <button>Contact Me</button>
                        </a>
                        <a href="https://www.linkedin.com/in/zuri-cason/">
                            <AiFillLinkedin className="nav-icon" />
                        </a>
                        <a href="https://github.com/zcason">
                            <AiOutlineGithub className="nav-icon" />
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
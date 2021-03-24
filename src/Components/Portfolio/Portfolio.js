import './Portfolio.css';
import colImage from '../../Images/col-screenshot.png'
import resReviewImage from '../../Images/Restaurants-Page.png'
import spacedRepImage from '../../Images/spaced-rep-screenshot.png'


const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <h3 className="portfolio-header">Portfolio</h3>
                <div class="group">
                    <div class="item">
                        <h3>C.O.L. (Coginitive Off-loader) App</h3>
                        <img src={colImage} alt="COL App - Zuri Cason" class="rounded" />
                        <p>This web-application is for anyone that wants to take of control of their busy schedule. Cognative
                            Off-loader is web-application that allows users to utilize a calendar for scheduling and reviewing
                            future events. I decided to build C.O.L. because I was having trouble keeping up with my schedule and
                            wanted to build something that could help me out.
                        </p>
                        <p class="tech-stack"> Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Mocha, Chai,
                            PostgreSQL, Vercel, Heroku. </p>
                        <span>
                            <a class="p-link" href="https://col.zcason.vercel.app/">View App</a>
                            <a class="p-link" href="https://github.com/zcason/COL-client">GitHub Repo (Client-Side)</a>
                            <a class="p-link" href="https://github.com/zcason/COL-server">GitHub Repo (Server-Side)</a>
                        </span>
                    </div>
                </div>
                <div class="group-two">
                    <div class="item">
                        <h3>Restaurant Review</h3>
                        <img src={resReviewImage} alt="Restaurants Review  App- Zuri Cason" class="rounded" />
                        <p>This web-application is for anyone that needs a helping hand in choosing what restaurant to eat at.
                            Restaurant Review is a restaurant board, similar to Yelp, that allows users to checkout or write reviews
                            for restaurants. I decided to bulid 'Restaurant Review' to work on my front-end skills, particularly css.
                        </p>
                        <p class="tech-stack"> Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Mocha, Chai,
                            PostgreSQL, Vercel, Heroku. </p>
                        <span>
                            <a class="p-link" href="https://restaurant-review-phi.vercel.app">View App</a>
                            <a class="p-link" href="https://github.com/zcason/Restaurant-Review-Client">GitHub Repo (Client-Side)</a>
                            <a class="p-link" href="https://github.com/zcason/Restaurant-Review-Server">GitHub Repo (Server-Side)</a>
                        </span>
                    </div>
                    <div class="item">
                        <h3>Spaced Repetition App</h3>
                        <img src={spacedRepImage} alt="Spaced Repetition App - Zuri Cason" class="rounded"/>
                        <p>Spaced Repetition App is for anyone that wants to learn a new language.
                            This web-application uses the spaced repetition studying method for learning a new
                            language. I decided to build 'Spaced Repetition App' because I wanted to challenge myself in
                            implementing the linked list data structure inside an actual web-application.
                        </p>
                        <p class="tech-stack">
                            Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Cypress, Mocha, Chai, PostgreSQL,
                            Vercel, Heroku.
                        </p>
                        <span>
                            <a class="p-link" href="https://space-rep-client.vercel.app/login">View App</a>
                            <a class="p-link" href="https://github.com/zcason/space-repetition-client">GitHub Repo (Client-Side)</a>
                            <a class="p-link" href="https://github.com/zcason/spaced-repetition-api">GitHub Repo (Server-Side)</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
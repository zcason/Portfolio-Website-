import colImage from '../../Images/col-screenshot.png';
import resReviewImage from '../../Images/Restaurants-Page.png';
import spacedRepImage from '../../Images/spaced-rep-screenshot.png';
import repoFinder from '../../Images/repo-finder.png';

const projects  = {
    fullstack: <>
        <div className="group">
            <div className="item">
                <h3>C.O.L. (Coginitive Off-loader) App</h3>
                <img src={colImage} alt="COL App - Zuri Cason" className="rounded" />
                <p>This web-application is for anyone that wants to take of control of their busy schedule. Cognative
                    Off-loader is web-application that allows users to utilize a calendar for scheduling and reviewing
                    future events. I decided to build C.O.L. because I was having trouble keeping up with my schedule and
                    wanted to build something that could help me out.
                </p>
                <p className="tech-stack"> Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Mocha, Chai,
                    PostgreSQL, Vercel, Heroku. </p>
                <span>
                    <a className="p-link" href="https://col-eosin.vercel.app">View App</a>
                    <a className="p-link" href="https://github.com/zcason/COL-client">GitHub Repo (Client-Side)</a>
                    <a className="p-link" href="https://github.com/zcason/COL-server">GitHub Repo (Server-Side)</a>
                </span>
            </div>
        </div>
        <div className="group-two">
            <div className="item">
                <h3>Restaurant Review</h3>
                <img src={resReviewImage} alt="Restaurants Review  App- Zuri Cason" className="rounded" />
                <p>This web-application is for anyone that needs a helping hand in choosing what restaurant to eat at.
                    Restaurant Review is a restaurant board, similar to Yelp, that allows users to checkout or write reviews
                    for restaurants. I decided to bulid 'Restaurant Review' to work on my front-end skills, particularly css.
                </p>
                <p className="tech-stack"> Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Mocha, Chai,
                    PostgreSQL, Vercel, Heroku. </p>
                <span>
                    <a className="p-link" href="https://restaurant-review-phi.vercel.app">View App</a>
                    <a className="p-link" href="https://github.com/zcason/Restaurant-Review-Client">GitHub Repo (Client-Side)</a>
                    <a className="p-link" href="https://github.com/zcason/Restaurant-Review-Server">GitHub Repo (Server-Side)</a>
                </span>
            </div>
            <div className="item">
                <h3>Spaced Repetition App</h3>
                <img src={spacedRepImage} alt="Spaced Repetition App - Zuri Cason" className="rounded"/>
                <p>Spaced Repetition App is for anyone that wants to learn a new language.
                    This web-application uses the spaced repetition studying method for learning a new
                    language. I decided to build 'Spaced Repetition App' because I wanted to challenge myself in
                    implementing the linked list data structure inside an actual web-application.
                </p>
                <p className="tech-stack">
                    Technology: HTML5, CSS3, JavaScript ES6, React, Node.js, Express.js, Cypress, Mocha, Chai, PostgreSQL,
                    Vercel, Heroku.
                </p>
                <span>
                    <a className="p-link" href="https://space-rep-client.vercel.app/login">View App</a>
                    <a className="p-link" href="https://github.com/zcason/space-repetition-client">GitHub Repo (Client-Side)</a>
                    <a className="p-link" href="https://github.com/zcason/spaced-repetition-api">GitHub Repo (Server-Side)</a>
                </span>
            </div>
        </div>
    </>,
    frontend: <>
        <div className="group">
            <div className="item">
                <h3>Github Reopsitory Finder</h3>
                <img src={repoFinder} alt="Github Reopsitory Finder - Zuri Cason" className="rounded" />
                <p>This web-application is for finding repositories on the github website. Github Repository Finder uses a search form to pinpoint 
                specific repos based on name, language, and allows them to be sorted by the amount of stargazer each repo has.
                </p>
                <p className="tech-stack"> Technology: HTML5, CSS3, JavaScript ES6, React, React Hooks, Redux, Jest, Enzyme, Vercel. </p>
                <span>
                    <a className="p-link" href="https://repo-search-nine.vercel.app">View App</a>
                    <a className="p-link" href="https://github.com/zcason/github-repo-search">GitHub Repo</a>
                </span>
            </div>
        </div>
     </>
};

export default projects;
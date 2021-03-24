import './App.css';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Tools from '../Tools/Tools';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <AboutMe />
      <Services />
      <Portfolio />
      <Tools />
      <Footer />
    </ div>
  );
}

export default App;

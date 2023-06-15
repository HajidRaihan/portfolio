// import './App.css';

import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="mybg" id="header">
        <NavigationBar />
        <Intro />
      </div>
      <div className="aboutbg">
        <About />
      </div>
      <div className="project" id="project">
        <Project />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

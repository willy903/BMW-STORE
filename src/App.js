import "./styles/App.css";
import Services from "./components/services/services";
import NavBar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Experience from "./components/Experience/experience";
import Works from "./components/works/works";
import Portfolio from "./components/portfolio/portfolio";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;

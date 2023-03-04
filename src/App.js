import "./styles/App.css";
import Services from "./components/services/services";
import NavBar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Experience from "./components/Experience/experience";
import Works from "./components/works/works";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

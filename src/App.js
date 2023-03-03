import './styles/App.css';
import Services from './components/services/services';
import NavBar from './components/NavBar/navbar';
import Intro from './components/intro/intro';
import Experience from './components/Experience/experience';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;

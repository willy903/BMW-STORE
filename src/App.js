import './styles/App.css';
import Services from './components/services/services';
import NavBar from './components/NavBar/navbar';
import Intro from './components/intro/intro';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;

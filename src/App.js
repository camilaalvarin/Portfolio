import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';

function App() {
  return ( 
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Skills />
      </div>
  );
}

export default App;

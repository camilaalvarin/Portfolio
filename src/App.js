import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills';

function App() {
  return ( 
      <div className="App">
        <Intro />
        <About />
        <Projects />
        <Skills />
      </div>
  );
}

export default App;

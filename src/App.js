import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills';
import Form from './components/Form/Form'

function App() {
  return ( 
      <div className="App">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Form />
      </div>
  );
}

export default App;

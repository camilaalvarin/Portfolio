import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills';
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar';
import data from '../src/data/data'

function App() {
  return ( 
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Projects data={data} />
        <Skills />
        <Form />
      </div>
  );
}

export default App;

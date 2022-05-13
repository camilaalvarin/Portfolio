import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Route, Routes, Switch  } from 'react-router-dom';
import Form from './components/Form/Form'
import Projects from './components/Projects/Projects'
import Intro from './components/Intro/Intro'
import About from './components/About/About';
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
        <Form />
      </div>
  );
}

export default App;

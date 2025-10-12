import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/pages/Navbar/navbar';
import Home from './Component/home/home';
import About from './Component/about/About';
import Project from './Component/project/Project';
import Experience from './Component/experience/Experience';
import Contact from './Component/contact/Contact';

function App() {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="App dark min-h-screen bg-dark-900">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
      </Router>
    </div>
  );
}

export default App;

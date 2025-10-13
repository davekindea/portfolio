import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './Component/Loading/Loading';
import Cursor from './Component/Cursor/Cursor';
import Navbar from './Component/pages/Navbar/navbar';
import Home from './Component/home/home';
import About from './Component/about/About';
import Project from './Component/project/Project';
import Experience from './Component/experience/Experience';
import Contact from './Component/contact/Contact';

function App() {
  return (
    <>
      <Loading />
      <Cursor />
      <div className="App min-h-screen bg-dark-900">
        <Router>
          <Navbar />
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
        </Router>
      </div>
    </>
  );
}

export default App;

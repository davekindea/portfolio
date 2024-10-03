import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/pages/Navbar/navbar';
import Home from './Component/home/home';
import About from './Component/about/About';
import Offer from './Component/offer/offer';
import Project from './Component/project/Project';
import Certificates from './Component/Certificates/Certificates';
import Contact from './Component/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Home/>
          <About/>
          <Offer/>
          <Project/>
          <Certificates/>
      <Contact/>
        
      </Router>
      
    
    </div>
  );
}

export default App;

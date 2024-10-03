import logo from './logo.svg';
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
      <Navbar/>
      <Home/>
      <About/>
      <Offer/>
      <Project/>
      <Certificates/>
      <Contact/>
    
    </div>
  );
}

export default App;

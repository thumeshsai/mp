import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;

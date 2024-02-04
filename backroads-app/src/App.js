import React from 'react';
import About from './components/about';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Services from './components/services';
import Tours from './components/Tours';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
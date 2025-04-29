import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import ScrollableSections from './components/ScrollableSections';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <Header />
         <About />
        <ScrollableSections />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
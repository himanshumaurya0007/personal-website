import './App.css';
import { Routes, Route } from 'react-router';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import AboutMe from './pages/AboutMe.jsx';

import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Other Routes */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<AboutMe />} />
        
        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App;

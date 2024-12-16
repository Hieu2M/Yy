import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Test from './pages/Test';
import ScrollToTop from "./components/ScrollToTop.tsx";
import ClientPortal from "./pages/ClientPortal.tsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/schedule" element={<Test />} />
            {/*<Route path="/schedule" element={<Schedule />} />*/}
            <Route path="/contact" element={<Contact />} />
            <Route path="/clientportal" element={<ClientPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';
import Project2Page from './pages/Project2Page';
import Project3Page from './pages/Project3Page';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectPage />} />
        <Route path="/project2" element={<Project2Page />} />
        <Route path="/project3" element={<Project3Page />} />
      </Routes>
    </Router>
  );
}

export default App;
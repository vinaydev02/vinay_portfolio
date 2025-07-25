

import './styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="container footer">
        <p>&copy; 2025 Vinay Yadav. All Rights Reserved.</p>
      </footer>
    </>
  );
}
export default App

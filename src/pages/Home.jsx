import { Link } from 'react-router-dom';
import { useState } from 'react';
import profilePic from '../image.jpeg';


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="container navbar-flex">
          {/* Website Name or Logo */}
          <div className="navbar-left">
            <a href="#" className="navbar-logo">
              <h1>Vinay Yadav</h1>
            </a>
          </div>
          {/* Hamburger Menu Button */}
          <div className={`menu-btn${isMenuOpen ? ' open' : ''}`} onClick={toggleMenu}>
            <div className="menu-btn__lines"></div>
          </div>
          {/* Navigation Links */}
          <div className={`navbar-right${isMenuOpen ? ' active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
              <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link></li>
              <li><Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content container">
          <h2>Aspiring Web Developer | Computer Science Student</h2>
          <p>A passionate coder on a journey to build modern, efficient web applications.</p>
          <a className="btn" href="#projects">View My Work</a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="container section">
        <h2>About Me</h2>
        <div className="about-content">
          {/* Replace with your professional profile image */}
          <img src={profilePic} alt="Profile picture of Vinay Yadav" className="profile-pic" />
          <div className="bio">
            <p><strong>I'm <br /> Vinay Yadav</strong></p>
            <p>I am a second-year BSc (Honors) Computer Science student at Tribhuvan College (Nalanda University Center). Passionate about building innovative web applications, I continuously strive to enhance my development skills.</p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="container section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="iconify" data-icon="devicon:java" data-width="40" data-height="40"></span>
            <span>Java</span>
          </div>
          <div className="skill-item">
            <span className="iconify" data-icon="vscode-icons:file-type-html" data-width="40" data-height="40"></span>
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <span className="iconify" data-icon="vscode-icons:file-type-css" data-width="40" data-height="40"></span>
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <span className="iconify" data-icon="logos:javascript" data-width="40" data-height="40"></span>
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <span className="iconify" data-icon="logos:python" data-width="40" data-height="40"></span>
            <span>Python</span>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="container section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>BSc (Honors) Computer Science</h3>
          <p>Tribhuvan College (Nalanda University Center)</p>
          <p><strong>Expected Graduation:</strong> 2027</p>
          <ul>
            <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
            <li>Clubs: Coding Club, Web Development Society</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="container section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Development Intern at Unified Mentor</h3>
          <p><strong>Responsibilities:</strong> Assisted in frontend development tasks, collaborated on web components, and contributed to responsive design improvements.</p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="container section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Doctor Appointment Booking Web App</h3>
          <p>A dynamic web application that allows users to book doctor appointments online. Developed using HTML, CSS, and JavaScript.</p>
          <a className="project-link" href="https://github.com/yourprofile/project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="container section">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&to=vinayyadav08765@gmail.com" target="_blank" rel="noopener noreferrer">vinayyadav08765@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vinayyadavdev02" target="_blank" rel="noopener noreferrer">Vinay Yadav</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/vinaydev02" target="_blank" rel="noopener noreferrer">vinaydev02</a></p>
          {/* Optional WhatsApp contact */}
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/9521202559" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        </div>
      </section>
    </>
  );
}

export default Home;

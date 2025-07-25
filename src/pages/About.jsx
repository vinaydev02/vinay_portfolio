import React from 'react';

function About() {
  return (
    <section className="container section about-section" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        {/* Profile image removed as requested */}
        <div className="about-details">
          <h2>Hello! I'm Vinay Yadav</h2>
          <p>
            I am a passionate Computer Science student with a strong interest in web development, algorithms, and building impactful digital solutions. I enjoy learning new technologies and collaborating on creative projects.
          </p>
          <ul className="about-highlights">
            <li><strong>Education:</strong> BSc (Hons) Computer Science, Tribhuvan College (Nalanda University Center)</li>
            <li><strong>Skills:</strong> React, JavaScript, HTML, CSS, Firebase, Git</li>
            <li><strong>Interests:</strong> Coding, Open Source, UI/UX Design, Problem Solving</li>
            <li><strong>Hobbies:</strong> Reading, Music, and Football</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

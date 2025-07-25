import React from 'react';

function Skill() {
  return (
    <section className="container section" id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-box technical-box">
          <h2>Technical Skills</h2>
          <div className="skill-item">
            <ul>
              <li>Web Development</li>
              <li>Data Preprocessing and Visualization</li>
              <li>DSA (Data Structures and Algorithms)</li>
            </ul>
          </div>
        </div>
        <div className="skill-box softskills-box">
          <h2>Soft Skills</h2>
          <div className="skill-item">
            {/* Add soft skills here */}
          </div>
        </div>
        <div className="skill-box tools-box">
          <h2>Tools & Technologies</h2>
          <div className="skill-item">
            <ul>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

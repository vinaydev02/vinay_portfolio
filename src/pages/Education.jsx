import React from 'react';

function Education() {
  return (
    <section className="container section" id="education">
      <h1>Education</h1>
      <div className="education-container">
        <div className="edu-box graduation-box">
          <h2>Graduation</h2>
          <div className="education-item">
            <h3>BSc (Honors) Computer Science</h3>
            <p>Tribhuvan College (Nalanda University Center)</p>
            <p><strong>Expected Graduation:</strong> 2027</p>
            <ul>
              <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
              <li>Clubs: Coding Club, Web Development Society</li>
            </ul>
          </div>
        </div>
        <div className="edu-box highsecondary-box">
          <h2>High Secondary</h2>
          <div className="education-item">
            <h3>12th Grade, PCM with Computer Science</h3>
            <p>Jawahar Navodaya Vidyalaya</p>
            <p><strong>Passout</strong> 2022</p>
            <ul>
              <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
              <li>Clubs: Coding Club, Web Development Society</li>
            </ul>
          </div>
        </div>
        <div className="edu-box secondary-box">
          <h2>Secondary</h2>
          <div className="education-item">
            <h3>10th Grade, General</h3>
            <p>Jawahar Navodaya Vidyalaya</p>
            <p><strong>Passout</strong> 2020</p>
            <ul>
              <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
              <li>Clubs: Coding Club, Web Development Society</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

import React from 'react';
import todoImage from '../assets/to-do.png';
import weatherImage from '../assets/weather.png';

function Project() {
  return (
    <section className="container section" id="project">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-box">
          <h2>Project 1</h2>
          <div className="project-item">
            <h3>To-Do List Web App</h3>
            <img 
              src={todoImage} 
              alt="To-Do List Web App Screenshot" 
              className="project-image"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '2px solid #ddd',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}
            />
            <p>A dynamic To-Do List web application with full CRUD (Create, Read, Update, Delete) functionality. Users can add new tasks, mark them as complete, edit existing tasks, and delete completed or unwanted items.</p>
            <ul>
              <li><strong>Features:</strong> Add, Edit, Delete, and Mark Complete tasks</li>
              <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
              <li><strong>Functionality:</strong> Local storage for data persistence</li>
            </ul>
            <a href="https://github.com/vinaydev02/To-Do" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        </div>
        <div className="project-box">
          <h2>Project 2</h2>
          <div className="project-item">
            <h3>Weather App - Indian Cities</h3>
            <img 
              src={weatherImage} 
              alt="Weather App Screenshot" 
              className="project-image"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '2px solid #ddd',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}
            />
            <p>A dynamic weather application that displays current weather conditions for Indian cities. Users can search for any Indian city and get real-time weather information including temperature, humidity, and weather conditions.</p>
            <ul>
              <li><strong>Features:</strong> Real-time weather data, Indian cities search, detailed weather info</li>
              <li><strong>Technologies:</strong> HTML, CSS, JavaScript, OpenWeatherMap API</li>
              <li><strong>API Integration:</strong> OpenWeatherMap API for accurate weather data</li>
            </ul>
            <a href="https://github.com/vinaydev02/weather" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;


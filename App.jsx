// src/App.js

import React, { useState } from 'react';
import ProjectDetailsForm from './components/ProjectDetailsForm';

const App = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h1>Project Details</h1>
      <ProjectDetailsForm onAddProject={addProject} />
      <div>
        <h2>Project List</h2>
        {projects.length === 0 && <p>No projects added yet.</p>}
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong><br />
              ARR: ${project.arr.toFixed(2)}<br />
              Technologies Used: {project.technologies}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

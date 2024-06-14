// src/components/ProjectDetailsForm.js

import React, { useState } from 'react';

const ProjectDetailsForm = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [arr, setArr] = useState('');
  const [technologies, setTechnologies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({
      name,
      arr: parseFloat(arr),
      technologies: parseInt(technologies, 10),
    });
    setName('');
    setArr('');
    setTechnologies('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Project Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Annual Recurring Revenue (ARR):
          <input type="number" value={arr} onChange={(e) => setArr(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Number of Technologies Used:
          <input type="number" value={technologies} onChange={(e) => setTechnologies(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectDetailsForm;

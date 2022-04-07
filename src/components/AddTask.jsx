import React, { useState } from 'react';

import Button from './Button';
import './AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    inputData !== "" ? handleTaskAddition(inputData) : setInputData('');
  };

  return (
    <div className="add-task-container">
      <input
        onChange={ handleInputChange }
        value={ inputData }
        className="add-task-input"
        placeholder="Type a task"/>
      <div className="add-task-button-container">
        <Button onClick={ handleAddTaskClick }>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddTask;

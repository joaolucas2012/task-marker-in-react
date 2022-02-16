import React from 'react';
import { CgClose } from 'react-icons/cg';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) =>
  (
    <div
      className=".task-container"
      style={task.completed ? { borderLeft: '6px solid orangered' } : {}}
    >
      <div
        className="task-title"
        onClick={() => handleTaskClick(task.id)}
        aria-hidden="true"
      >
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-btn"
          type="button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>

    </div>
  );

export default Task;

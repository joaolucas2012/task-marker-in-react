import React from 'react';

import './Task.css';

const Task = ({ task, handleTaskClick }) =>
  (
    <div
      className=".task-container"
      on
      style={task.completed ? { borderLeft: '6px solid orangered' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id) }>
        {task.title}
      </div>
    </div>
  );

export default Task;

import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  }

  return (
    <div
      className="task-container"
      style={
        task.isCompleted ? { color: "#444", backgroundColor: "chartreuse" } : {}
      }
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
          className={
            task.isCompleted 
              ? "task-completed-button__style" 
              : "remove-task-btn"
          }
          type="button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button
          className={
            task.isCompleted
              ? "task-completed-button__style"
              : "see-task-details-btn"
          }
          type="button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;

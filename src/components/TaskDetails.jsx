import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./TaskDetails.css";
import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="back-button-container">
        <Button type="button" onClick={handleBackButtonClick}>
          Back
        </Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          I have to {params.taskTitle} as faster as I can! This is a great
          responsibility and I should pay attention to it before is too late.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;

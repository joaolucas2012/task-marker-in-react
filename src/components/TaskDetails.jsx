import React from "react";
import { useParams } from "react-router-dom";

import './TaskDetails.css';
import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();
  return (
    <>
      <div className="back-button-container">
        <Button>Back</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          eos voluptate corporis quas consectetur officiis iusto, vel, dolorum
          pariatur delectus ipsum, illo laudantium veritatis aliquid adipisci
          perspiciatis in nihil aliquam.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;

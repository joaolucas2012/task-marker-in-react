import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import TaskDetails from "./components/TaskDetails";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Post something on Instagram",
      isCompleted: false,
    },
    {
      id: "2",
      name: "Learn React",
      isCompleted: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import AddTask from "./components/AddTask";
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      name: 'Post something on Instagram',
      isCompleted: false,
    },
    {
      id: '2',
      name: 'Learn React',
      isCompleted: true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default App;

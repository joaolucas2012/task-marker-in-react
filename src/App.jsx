import React, { useState } from "react";

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

  setTasks([]);

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={tasks}/>
    </div>
  ),
}

export default App;

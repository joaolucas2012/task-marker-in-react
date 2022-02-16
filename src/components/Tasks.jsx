import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  tasks.map(task =>
  <Task
    task={task}
    handleTaskClick={handleTaskClick}
    handleTaskDeletion={handleTaskDeletion}
  />);
};

export default Tasks;

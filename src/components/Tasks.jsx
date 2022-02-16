import Task from './Task';

const Tasks = ({ tasks, handleTaskClick }) => {
  tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick}/>);
};

export default Tasks;

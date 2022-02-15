import Task from './Task';

const Tasks = ({ tasks }) => { tasks.map(task => <Task task={task} />); };

export default Tasks;

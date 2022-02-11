import Button from './Button';
import './AddTask.css';

const AddTask = () =>
  (
    <div className="add-task-container">
      <input type="text" className="add-task-input" placeholder="Type a task"/>
      <Button>Add</Button>
    </div>
  );

export default AddTask;

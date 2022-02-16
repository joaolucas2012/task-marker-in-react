import Button from './Button';
import './AddTask.css';

const AddTask = () =>
  (
    <div className="add-task-container">
      <input type="text" className="add-task-input" placeholder="Type a task"/>
      <div className="add-task-button-container">
        <Button>Add</Button>
      </div>
    </div>
  );

export default AddTask;

import React from 'react';

import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        type="submit"
        className="add-task-btn"
        onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;

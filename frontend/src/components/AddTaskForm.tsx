import React from 'react';

const AddTaskForm = () => {
  return (
    <div className="add-task-form">
      <h2>Add New Task</h2>
      <input type="text" placeholder="Task Title" />
      <textarea placeholder="Task Description"></textarea>
      <input type="date" />
      <button>Submit</button>
    </div>
  );
};

export default AddTaskForm;

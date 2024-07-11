// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, openEditForm, handleDeleteClick }) => {
  const handleEditClick = () => {
    openEditForm(task);
  };

  const handleDelete = () => {
    handleDeleteClick(task);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;

// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, selectedTask, closeDialog }) => {
  const initialTask = { id: null, name: '', description: '', completed: false };
  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask(initialTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) return;
    if (task.id === null) {
      addTask({ ...task, id: Date.now() });
    } else {
      editTask(task);
    }
    setTask(initialTask);
    closeDialog();
  };

  return (
    <div className="task-form">
      <h2>{task.id === null ? 'Add Task' : 'Edit Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task Name"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        ></textarea>
        <button type="submit">{task.id === null ? 'Add' : 'Update'}</button>
      </form>
    </div>
  );
};

export default TaskForm;

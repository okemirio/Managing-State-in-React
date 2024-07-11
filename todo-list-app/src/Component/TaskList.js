// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, openEditForm, setShowDialog, setSelectedTask }) => {
  const handleDeleteClick = (task) => {
    setSelectedTask(task);
    setShowDialog(true);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          openEditForm={openEditForm}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default TaskList;

// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ConfirmationDialog from './components/ConfirmationDialog';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== selectedTask.id);
    setTasks(updatedTasks);
    setSelectedTask(null);
    setShowDialog(false);
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const openEditForm = (task) => {
    setSelectedTask(task);
  };

  const closeDialog = () => {
    setSelectedTask(null);
    setShowDialog(false);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        selectedTask={selectedTask}
        closeDialog={closeDialog}
      />
      <TaskList
        tasks={tasks}
        openEditForm={openEditForm}
        setShowDialog={setShowDialog}
        setSelectedTask={setSelectedTask}
      />
      <ConfirmationDialog
        showDialog={showDialog}
        deleteTask={deleteTask}
        closeDialog={closeDialog}
      />
    </div>
  );
}

export default App;

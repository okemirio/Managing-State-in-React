// src/components/ConfirmationDialog.js
import React from 'react';

const ConfirmationDialog = ({ showDialog, deleteTask, closeDialog }) => {
  if (!showDialog) return null;

  return (
    <div className="confirmation-dialog">
      <h2>Confirm Delete?</h2>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={closeDialog}>Cancel</button>
    </div>
  );
};

export default ConfirmationDialog;

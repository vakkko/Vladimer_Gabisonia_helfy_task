import React from "react";
import type { DeleteModalInterface } from "./deleteModal.interface";

const DeleteModal: React.FC<DeleteModalInterface> = ({
  deleteTask,
  deleteTaskId,
  setTaskToDelete,
}) => {
  const handleCancelClick = () => {
    setTaskToDelete(false);
  };

  const handleYesClick = () => {
    if (deleteTaskId) {
      deleteTask(deleteTaskId);
      setTaskToDelete(false);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this item?</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={handleCancelClick}>
            Cancel
          </button>
          <button className="btn-delete" onClick={handleYesClick}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

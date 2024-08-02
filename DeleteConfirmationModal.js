import React from 'react';

export const DeleteConfirmationModal = ({ show, task, onDelete, onCancel }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete the task "{task?.task}"?</p>
                <button onClick={onDelete} className="modal-btn delete-btn">Delete</button>
                <button onClick={onCancel} className="modal-btn cancel-btn">Cancel</button>
            </div>
        </div>
    );
};
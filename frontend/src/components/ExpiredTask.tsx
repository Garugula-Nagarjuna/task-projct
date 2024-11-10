// Sidebar.js
import React, { useState } from 'react';
import './ExpiredTask.css';
import Calendar from './Calendar';

const Sidebar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Ensure Date | null type here

    const handleAddTaskClick = () => {
        setShowPopup(true);
        setShowDatePicker(false); // Reset date picker visibility on popup open
    };

    const handleOpenDatePicker = () => {
        setShowDatePicker(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowDatePicker(false);
    };
    const handleDateSelect = (date: Date | null) => {
        setSelectedDate(date);
        setShowDatePicker(false);  // Close the date picker after selection if needed
    };

return (
            <div className="side-bar">
                <div className="expired-tasks boxi">
                    <div className="img"><i className="fa-solid fa-triangle-exclamation"></i></div>
                    <p className="status-title">Expired Tasks</p>
                    <p className="status-count">5</p>
                </div>
                <div className="active-tasks boxi">
                    <div className="img"><i className="fa-solid fa-bag-shopping"></i></div>
                    <p className="status-title">All Active Tasks</p>
                    <p className="status-count">7</p>
                </div>
                <div className="status-card boxi">
                    <div className="img"><i className="fa-regular fa-clock"></i></div>
                    <p className="status-title">Completed Tasks</p>
                    <p className="status-count">5</p>
                </div>
                <button onClick={handleAddTaskClick}>Add Task</button>

            {showPopup && (
                <div className="modal-overlay" onClick={handleClosePopup}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Add New Task</h2>
                        <button onClick={handleOpenDatePicker}>Select Date</button>
                        {showDatePicker && (
                            <Calendar onDateSelect={handleDateSelect} />
                        )}
                        <button className="close-modal-btn" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};




export default Sidebar;

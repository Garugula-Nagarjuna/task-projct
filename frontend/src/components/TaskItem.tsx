// TaskItem.tsx
import React from 'react';

interface TaskItemProps {
    title: string;
    description: string;
    priority: 'High' | 'Low';
    deadline: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, description, priority, deadline }) => (
    <div className="task-item">
        <div>
            <span>{priority}</span>
            <span>⋮</span>
        </div>
        <div className="txt">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="deadline">
            <span>Deadline:</span>
            <span>{deadline}</span>
        </div>
    </div>
);

export default TaskItem;

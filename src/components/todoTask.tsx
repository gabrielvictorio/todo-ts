import React from 'react';
import { ITask } from '../interfaces';

interface Props{
    task: ITask;
    completeTask (completedTask: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="todolistContent">
            <div className="innercontent">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    );
};

export default TodoTask;
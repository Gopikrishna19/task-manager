import React, {PropTypes} from 'react';
import TaskType from '../state/task';

const Task = props =>
    <div>
        <input
            checked={props.task.done}
            onChange={props.toggleDone}
            type='checkbox'
        />
        <span>
            {props.task.description}
        </span>
        <button
            onClick={props.deleteTask}
            type='button'
        >
            x
        </button>
    </div>;

Task.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    task: PropTypes.instanceOf(TaskType).isRequired,
    toggleDone: PropTypes.func.isRequired
};

export default Task;

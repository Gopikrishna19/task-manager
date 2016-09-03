import React, {PropTypes} from 'react';
import Task from './task';

const TaskList = props =>
    <ul>
        {
            props.tasks.map(
                (task, index) =>
                    <li key={index}>
                        <Task
                            deleteTask={() => props.actions.deleteTask(index)}
                            task={task}
                            toggleDone={() => props.actions.toggleDone(index)}
                        />
                    </li>
            )
        }
    </ul>;

TaskList.propTypes = {
    actions: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired
};

export default TaskList;

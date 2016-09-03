import React, {PropTypes} from 'react';
import Task from './task';

const TaskList = props =>
    <ul>
        {
            props.tasks.map(
                (task, index) =>
                    <li key={index}>
                        <Task task={task}/>
                    </li>
            )
        }
    </ul>;

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};
TaskList.defaultProps = {
    tasks: []
};

export default TaskList;

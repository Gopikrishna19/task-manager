import React, {PropTypes} from 'react';

const Task = props =>
    <div>
        {props.task}
    </div>;

Task.propTypes = {
    task: PropTypes.string.isRequired
};

export default Task;

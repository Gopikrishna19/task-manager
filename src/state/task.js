import t from 'tcomb';

const Task = t.struct({
    description: t.String,
    done: t.Boolean
}, 'Task');

export default Task;

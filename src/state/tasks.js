import Task from './task';
import t from 'tcomb';

const Tasks = t.list(Task, 'Tasks');

export default Tasks;

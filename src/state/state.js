import Tasks from './tasks';
import t from 'tcomb';

const State = t.struct({
    tasks: Tasks
}, 'State');

export default State;

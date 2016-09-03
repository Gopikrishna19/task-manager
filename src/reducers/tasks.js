import Task from '../state/task';
import Tasks from '../state/tasks';
import actions from '../actions';

function addTask(state, action) {

    return Tasks.update(state, {
        $push: [
            new Task({
                description: action.description,
                done: false
            })
        ]
    });

}

function deleteTask(state, action) {

    return Tasks.update(state, {
        $splice: [[action.index, 1]]
    });

}

function toggleDone(state, action) {

    const done = state[action.index].done;

    return Tasks.update(state, {
        [action.index]: {
            done: {
                $set: !done
            }
        }
    });

}

export default function (state = [], action) {

    const reducers = {
        [actions.ADD_TASK]: addTask,
        [actions.DELETE_TASK]: deleteTask,
        [actions.TOGGLE_DONE]: toggleDone
    };
    const reducer = reducers[action.type];

    return reducer ? reducer(state, action) : state;

}

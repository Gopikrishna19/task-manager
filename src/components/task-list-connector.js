import TaskList from './task-list';
import actionCreators from '../action-creators';
import {connect} from 'react-redux';

function mapStateToProps(state) {

    return {
        tasks: state.tasks
    };

}

function mapEverythingToProps(state, actions) {

    return {
        ...state,
        actions
    };

}

export default connect(mapStateToProps, actionCreators, mapEverythingToProps)(TaskList);

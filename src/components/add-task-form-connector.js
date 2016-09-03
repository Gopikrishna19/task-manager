import AddTaskForm from './add-task-form';
import actionCreators from '../action-creators';
import {connect} from 'react-redux';

function mapEverythingToProps(state, actions) {

    return {
        actions
    };

}

export default connect(
    state => state,
    actionCreators,
    mapEverythingToProps
)(AddTaskForm);

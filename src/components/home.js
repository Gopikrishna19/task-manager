import AddTaskFormContainer from './add-task-form-connector';
import {Provider} from 'react-redux';
import React from 'react';
import TasksListContainer from './task-list-connector';
import {getStore} from '../store';

const Home = () =>
    <Provider store={getStore()}>
        <div>
            <AddTaskFormContainer />
            <TasksListContainer />
        </div>
    </Provider>;

export default Home;

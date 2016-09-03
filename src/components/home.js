import AddTaskForm from './add-task-form';
import React from 'react';
import TasksList from './task-list';

const Home = () =>
    <div>
        <AddTaskForm />
        <TasksList />
    </div>;

export default Home;

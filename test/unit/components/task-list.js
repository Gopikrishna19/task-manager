import React from 'react';
import Task from '../../../src/components/task';
import TaskList from '../../../src/components/task-list';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given TaskList component', () => {

    let element;

    beforeEach(() => {

        element = shallow(<TaskList />);

    });

    it('should have a root ul', () => {

        expect(element.type()).equals('ul');

    });

    describe('when there are no tasks', () => {

        it('should not render anything', () => {

            expect(element.children().isEmpty()).true();

        });

    });

    describe('when there are tasks', () => {

        let testProps;

        beforeEach(() => {

            testProps = {
                tasks: ['sample task']
            };

            element.setProps(testProps);

        });

        it('should render given tasks', () => {

            expect(element.children().length).equals(testProps.tasks.length);

        });

        describe('given each task', () => {

            let taskElement;

            beforeEach(() => taskElement = element.childAt(0));

            it('should be a li', () => {

                expect(taskElement.type()).equals('li');

            });

            it('should have a key', () => {

                expect(taskElement.key()).equals('0');

            });

            it('should have Task', () => {

                const index = 0;

                expect(taskElement.childAt(index).type()).equals(Task);
                expect(taskElement.childAt(index).props().task).equals(testProps.tasks[index]);

            });

        });

    });

});

import React from 'react';
import Task from '../../../src/components/task';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given Task component', () => {

    let element,
        testProps;

    beforeEach(() => {

        testProps = {
            task: 'Task test'
        };

        element = shallow(<Task {...testProps} />);

    });

    it('should have a root div', () => {

        expect(element.type()).equals('div');

    });

    it('should render the task', () => {

        expect(element.childAt(0).text()).equals(testProps.task);

    });

});

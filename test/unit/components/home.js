import Home from '../../../src/components/home';
import React from 'react';
import TaskList from '../../../src/components/task-list';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given Home component', () => {

    let element;

    beforeEach(() => {

        element = shallow(<Home />);

    });

    it('should have a root div', () => {

        expect(element.type()).equals('div');

    });

    it('should have TaskList', () => {

        expect(element.childAt(0).type()).equals(TaskList);

    });

});

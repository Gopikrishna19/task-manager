import AddTaskForm from '../../../src/components/add-task-form';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given AddTaskForm component', () => {

    let element;

    beforeEach(() => {

        element = shallow(<AddTaskForm />);

    });

    it('should have a root form', () => {

        expect(element.type()).equals('form');

    });

    describe('text input', () => {

        let textElement;

        beforeEach(() => textElement = element.childAt(0));

        it('should be a text input', () => {

            expect(textElement.type()).equals('input');
            expect(textElement.props().type).equals('text');

        });

    });

    describe('add button', () => {

        let buttonElement;

        beforeEach(() => buttonElement = element.childAt(1));

        it('should be a simple button', () => {

            expect(buttonElement.type()).equals('button');
            expect(buttonElement.props().type).equals('button');

        });

        it('should have `Add` text', () => {

            expect(buttonElement.text()).equals('Add');

        });

    });

});

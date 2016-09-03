import Task from '../../../src/state/task';
import Tasks from '../../../src/state/tasks';
import {expect} from 'code';
import t from 'tcomb';

describe('Given Tasks type', () => {

    it('should have a type name', () => {

        expect(t.getTypeName(Tasks)).equals('Tasks');

    });

    describe('structure', () => {

        it('should be a list of Task', () => {

            expect(Tasks.meta.kind).equals(t.getTypeName(t.list));
            expect(Tasks.meta.type).equals(Task);

        });

    });

});

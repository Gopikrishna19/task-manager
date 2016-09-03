import Task from '../../../src/state/task';
import {expect} from 'code';
import t from 'tcomb';

describe('Given Task type', () => {

    it('should have a type name', () => {

        expect(t.getTypeName(Task)).equals('Task');

    });

    describe('structure', () => {

        let sampleTask,
            typedTask;

        beforeEach(() => {

            sampleTask = {
                description: 'description',
                done: true
            };

            typedTask = new Task(sampleTask);

        });

        it('should have `description`', () => {

            expect(typedTask.description).string().equals(sampleTask.description);

        });

        it('should have `done`', () => {

            expect(typedTask.done).boolean().equals(sampleTask.done);

        });

    });

});

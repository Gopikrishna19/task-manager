import State from '../../../src/state/state';
import Tasks from '../../../src/state/tasks';
import {expect} from 'code';
import t from 'tcomb';

describe('Given State type', () => {

    it('should have a type name', () => {

        expect(t.getTypeName(State)).equals('State');

    });

    describe('structure', () => {

        it('should have `tasks`', () => {

            expect(State.meta.props.tasks).equals(Tasks);

        });

    });

});

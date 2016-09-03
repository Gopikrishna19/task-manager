import {createStore} from 'redux';
import reducers from '../reducers';

let store;

export function getStore() {

    if (!store) {

        store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

    }

    return store;

}

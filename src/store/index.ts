import { createStore } from 'redux';
import { noteReducer } from '../reducers';

export const store = createStore(noteReducer);

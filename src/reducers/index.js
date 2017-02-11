import { combineReducers } from 'redux';
import NotesReducer from './reducer_notes';
import EditorReducer from './reducer_editor';

const rootReducer = combineReducers({
  noteRows: NotesReducer,
  loop: EditorReducer
});

export default rootReducer;

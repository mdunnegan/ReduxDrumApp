import { combineReducers } from 'redux';
import RowReducer from './reducer_notes';
import EditorReducer from './reducer_editor';

const rootReducer = combineReducers({
  rows: RowReducer,
  loop: EditorReducer
});

export default rootReducer;

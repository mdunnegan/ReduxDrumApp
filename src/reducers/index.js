import { combineReducers } from 'redux';
import EditorReducer from './reducer_editor';

const rootReducer = combineReducers({
  editor: EditorReducer,
});

export default rootReducer;

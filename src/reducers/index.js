import { combineReducers } from 'redux';
import EditorReducer from './reducer_editor';
import EditorListReducer from './reducer_editor_list'

const rootReducer = combineReducers({
  editors: EditorListReducer
});

export default rootReducer;

import { ADD_EDITOR } from '../actions/editor_list';
import { TOGGLE_NOTE, TOGGLE_LOOP } from '../actions/editor';
import update from 'immutability-helper';

export const editorInitialState = {
	toggled: true,
	noteRows: {
		0: {0:false, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false},
		1: {0:false, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false},		
		2: {0:false, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false},	
	}
};

const defaultState = [];

export default function(state = defaultState, action) {

	let editorIdx;
	let rowIdx;
	let colIdx;

	switch(action.type){

		case ADD_EDITOR:
			return [editorInitialState, ...state];

		case TOGGLE_NOTE:
			if (!action.payload) return state;

			editorIdx = action.payload.index;
			rowIdx = action.payload.row;
			colIdx = action.payload.column;

			const newData = update(state, {
			  [editorIdx]: {noteRows: {[rowIdx]: {[colIdx]: {$set: !state[editorIdx].noteRows[rowIdx][colIdx]}}}}
			});

			return newData;
			
  	case TOGGLE_LOOP:

			editorIdx = action.payload.index;
			const newState = update(state, {
			  [editorIdx]: {toggled: {$set: !state[editorIdx].toggled}}
			});
			return newState;
			
		default:
			return state;
	}
}
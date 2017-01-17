import { TOGGLE_NOTE } from '../actions/index';

const defaultState = 
	{
		notes: [
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
		]
	}

export default function(state = defaultState, action) {

	if (!action.payload) return state;

	const row = action.payload.row;
	const column = action.payload.column;

	switch(action.type){
	case TOGGLE_NOTE:
		let newState = state;
		newState.notes[row][column] = !state.notes[row][column];
		return newState;

	default:
		return state;
	}
}
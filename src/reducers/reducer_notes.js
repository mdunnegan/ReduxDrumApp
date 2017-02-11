import { TOGGLE_NOTE } from '../actions/index';

const defaultState = [
	[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
];

export default function(state = defaultState, action) {

	if (!action.payload) return state;

	const rowIdx = action.payload.row;
	const colIdx = action.payload.column;

	switch(action.type){
	case TOGGLE_NOTE:
		return state.map((row, i) => {
    	if (i == rowIdx){
    		return row.map((val, j) => {
    			if (j == colIdx){
    				return !val;
    			}
    			return val;
    		});
    	}
    	return row;
    });

	default:
		return state;
	}
}
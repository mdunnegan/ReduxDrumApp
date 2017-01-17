import { TOGGLE_LOOP } from '../actions/index';

const defaultState = false;

export default function(state = defaultState, action) {

	switch(action.type){
	case TOGGLE_LOOP:
		return {
			state: !state
		};

	default:
		return state;
	}
}
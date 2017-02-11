import { TOGGLE_LOOP } from '../actions/index';

const defaultState = true;

export default function(loop = defaultState, action) {

	switch(action.type){
	case TOGGLE_LOOP:
		return !loop

	default:
		return loop;
	}
}
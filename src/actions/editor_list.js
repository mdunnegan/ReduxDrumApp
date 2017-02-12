export const ADD_EDITOR = 'ADD_EDITOR';
import { editorInitialState } from '../containers/editor';

export function addEditor(editorInitialState) {
	return {
		type: ADD_EDITOR,
		payload: editorInitialState
	};
}
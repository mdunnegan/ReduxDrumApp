export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const TOGGLE_LOOP = 'TOGGLE_LOOP';

export function toggleNote(index, row, column) {
	return {
		type: TOGGLE_NOTE,
		payload: { index, row, column }
	};
}

export function toggleLoop(index) {
	return {
		type: TOGGLE_LOOP,
		payload: { index }
	};
}
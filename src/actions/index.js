export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const TOGGLE_LOOP = 'TOGGLE_LOOP';

export function toggleNote(row, column) {
	return {
		type: TOGGLE_NOTE,
		payload: {row, column}
	};
}

export function toggleLoop() {
	return {
		type: TOGGLE_LOOP
	}
}
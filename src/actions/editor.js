export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const TOGGLE_LOOP = 'TOGGLE_LOOP';
export const UPDATE_BPM = 'UPDATE_BPM';

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

export function updateBPM(index, newBpm) {
	return {
		type: UPDATE_BPM,
		payload: { index, newBpm }
	};
}
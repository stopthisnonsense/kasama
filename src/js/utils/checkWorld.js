import { world } from '../globals/globals';
/**
 *  @param { string } needle
 *  @param { object } haystack
 *
 */
export function checkWorld(needle, haystack) {
	// In this example, we want to check that a species doesn't exist before doing the thing.
	//step 1: Check that the world exists.
	//step 2: run find in object
	const checkResult = haystack.find(({ name }) => name === needle);
	if (checkResult) {
		// console.warn(`This already exists at ${haystack}`);
		return true;
	}
	return false;
}
/**
 * @function checkId
 *  @param { string } needle
 *  @param { Object } haystack
 *
 */
export function checkId(needle, haystack) {
	if (!haystack) {
		console.error('There is no haystack defined');
		return null;
	}
	if (!needle) {
		console.error(`there is no needle defined`);
		return null;
	}

	//step 2: run find in object
	const checkResult = haystack.find(({ id }) => id === needle);
	if (checkResult) {
		// console.warn(`This already exists at ${haystack}`);
		return true;
	}
	return false;
}

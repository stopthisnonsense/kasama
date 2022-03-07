/**
 * @function retrieve an item from our game object by name.
 *  @param { string } needle    The thing to look for
 *  @param { object } haystack The object to look at
 */

export function getItem(needle, haystack) {
	// In this example, we want to check that a species doesn't exist before doing the thing.
	//step 1: Check that the world exists.
	if (!haystack) {
		console.error('There is no haystack defined');
		return null;
	}
	if (!needle) {
		console.error(`there is no needle defined`);
		return null;
	}
	//step 2: run find in object
	const result = haystack.find(function ({ name }) {
		return name === needle;
	});
	if (result) {
		// console.warn(`This already exists at ${haystack}`);
		return result;
	}
	return null;
}
/**
 * @function retrieve an item from our game object by id.
 *  @param { string } needle    The thing to look for
 *  @param { object } haystack The object to look at
 */
export function getItemById(needle, haystack) {
	// In this example, we want to check that a species doesn't exist before doing the thing.
	//step 1: Check that the world exists.
	if (!haystack) {
		console.error('There is no haystack defined');
		return null;
	}
	if (!needle) {
		console.error(`there is no needle defined`);
		return null;
	}
	//step 2: run find in object
	const result = haystack.find(function ({ id }) {
		return id === needle;
	});
	if (result) {
		// console.warn(`This already exists at ${haystack}`);
		return result;
	}
	return null;
}

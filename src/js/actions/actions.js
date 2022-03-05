import { idNumber, world } from '../globals/globals';
import { checkWorld } from '../utils/checkWorld';
const action = {
	listen: (event, data) => {
		if (data) {
			console.log(world.creatures[event.id].lastHeard);
			return (world.creatures[event.id].lastHeard = data);
			// console.log(world.creatures[this.id]);
		}
		return `Nothing was Heard.`;
	},
	talk: (creature, data) => {
		if (data) {
			console.log(`${creature} said: ${data}`);
			return `${creature} said: ${data}`;
		}
	},
	observe: (creature, data) => {
		if (creature) {
			let returnData = console.log(JSON.stringify(creature));
			lastObserved = returnData;
			return returnData;
		}
		return;
	},
};

/*
 * @class
 */

export class ActionConstructor {
	/*
	 * @param {string} actionName The name of the action
	 * @param { function }
	 */
	constructor(actionName, functionCallback) {
		// check to see if this action exists
		if (!checkWorld(actionName, world.actions)) {
			// this.id = idNumber++;
			// this.name = actionName;
			let action = functionCallback;
			world.actions[actionName] = action;
		}
	}
}

new ActionConstructor('listen', (event, data) => {
	if (data) {
		console.log(world.creatures[event.id].lastHeard);
		return (world.creatures[event.id].lastHeard = data);
		// console.log(world.creatures[this.id]);
	}
	return `Nothing was Heard.`;
});

new ActionConstructor('talk', (creature, data) => {
	if (data) {
		console.log(`${creature} said: ${data}`);
		return `${creature} said: ${data}`;
	}
});

new ActionConstructor('observe', (creature, data) => {
	if (creature) {
		let returnData = console.log(JSON.stringify(creature));
		// lastObserved = returnData;
		return returnData;
	}
	return;
});

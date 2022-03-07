import { idNumber, world } from '../globals/globals';
import { checkWorld } from '../utils/checkWorld';
export class Species {
	constructor(speciesName) {
		if (!speciesName) {
			return console.error(`Name must be provided`);
		}

		if (checkWorld(speciesName, world.species) == false) {
			this.id = idNumber++;
			this.name = speciesName;
			world.species.push(this);
		}
	}
}

new Species('Human');

new Species('Doof');

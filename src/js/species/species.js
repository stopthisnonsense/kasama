import { idNumber, world } from '../globals/globals';
import { checkWorld } from '../utils/checkWorld';
export class Species {
	constructor(speciesName) {
		if (!speciesName) {
			return;
		}

		this.id = idNumber++;
		this.name = speciesName;
		if (!checkWorld(this.name, world.species)) {
			world.species.push(this);
		}
	}
}

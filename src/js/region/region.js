import { idNumber, world } from '../globals/globals';
export class Region {
	constructor(name) {
		this.id = idNumber++;
		this.name = name;
		world.regions.push(this);
	}
}

new Region('Region 1');

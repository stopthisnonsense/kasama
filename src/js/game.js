'use strict';
import { Species } from './species/species';
import { actions } from './actions/actions';
import { idNumber, world, lastObserved } from './globals/globals';
import { checkWorld } from './utils/checkWorld';
window.addEventListener(
	'load',
	() => {
		//This is the game world object, which controls and builds out everything.

		let message = 'Welcome to the game';
		const gameMessage = (message = message) => {
			console.log(message);
		};
		gameMessage(message);
		function creatureCreate(name, species) {
			// this.id = idNumber++;
			// this.name = name ? name : 'Doof';
			// this.species = world.species[species]
			// 	? world.species[species]
			// 	: new Species(species);
			// this.action = world.actions;
			// this.lastHeard = this.action.listen();
			let creatureName = name ? name : 'Doof';
			world.creatures[creatureName] = {
				id: idNumber++,
				name: creatureName,
				action: world.actions,
				lastHeard: action.listen(),
			};
		}
		let action = world.actions;
		new creatureCreate('I', 'Human');
		// new creatureCreate('I', 'Human');
		const i = world.creatures['I'];
		i.action.observe(i);
		action.talk(
			i.name,
			`Hmmmm, It seems that I can now see what I am. I am a ${i.species}`
		);
		action.talk(i.name, `At least, I think something is different`);
		new creatureCreate();
		const doof = world.creatures['Doof'];
		action.talk(i.name, `Here, is my friend ${doof.name}`);

		action.talk(i.name, `${doof.name} is the first of their kind.`);
		action.talk(
			i.name,
			`It may be strange, but it is not the first time that something like this has happened.`
		);
		action.talk(i.name, `Back to ${doof.name} for a minute though.`);
		action.talk(
			i.name,
			`${doof.name} may be named ${doof.name}, but that is not enough. We must first figure out what ${doof.name} is.`
		);
		action.talk(i.name, `${doof.name}, may I ask you, what are you.`);
		// console.log(doof);
		if (doof.lastHeard) {
			// console.log(doof.action.listen());
			// doof.lastHeard = doof.action.listen(
			// 	action.talk(
			// 		i.name,
			// 		`${doof.name} seemed to recognize it. I feel something is different.`
			// 	)
			// );
			// console.log(`${doof.name}'s last heard sound was "${doof.lastHeard}"`);

			i.lastHeard = i.action.listen(doof.action.talk(doof.name, `Sup`));

			doof.action.listen(action.talk(i.name, `${doof.name}! You speak! `));
			// doof.lastHeard;

			i.lastHeard = i.action.listen(doof.action.talk(doof.name, `Yup`));

			doof.lastHeard = doof.action.listen(
				action.talk(i.name, `Can you Tell Us more about yourself?`)
			);
			i.lastHeard = i.action.listen(doof.action.talk(doof.name, `Yup`));

			i.lastHeard = i.action.listen(
				doof.action.talk(doof.name, doof.action.observe(doof))
			);
		}

		action.talk(i.name, `Hmmm.`);

		action.talk(i.name, `I wonder what else we can observe`);
		action.observe(world);
		action.talk(i.name, `I can't seem to affect the world itself.`);
		action.talk(
			i.name,
			`It seems that I may not manifest myself on this. I need a method!`
		);
	},
	false
);

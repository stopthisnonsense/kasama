'use strict';

import { idNumber, world, lastObserved } from './globals/globals';
import { Species } from './species/species';
import { addAction } from './actions/actions';
import { Region } from './region/region';
import { checkWorld } from './utils/checkWorld';
import { getItem, getItemById } from './utils/getItem';
window.addEventListener(
	'load',
	() => {
		if (document.querySelector('.post-200')) {
			//This is the game world object, which controls and builds out everything.
			// const world = world;

			let message = 'Welcome to the game';
			const gameMessage = (message = message) => {
				console.log(message);
			};
			console.log(JSON.stringify(world));
			gameMessage(message);
			/*
			 * @function creatureCreate Create a new creature in the game environment
			 *
			 */
			function creatureCreate(name, species) {
				// this.id = idNumber++;
				// this.name = name ? name : 'Doof';
				// this.species = world.species[species]
				// 	? world.species[species]
				// 	: new Species(species);
				// this.action = world.actions;
				// this.lastHeard = this.action.listen();
				let speciesToBecome = undefined;
				if (checkWorld(species, world.species) == true) {
					speciesToBecome = getItem(`${species}`, world.species, 'name');
				}
				let creatureName = name ? name : 'Doof';
				let creature = (world.creatures[creatureName] = {
					id: idNumber++,
					name: creatureName,
					species: speciesToBecome,
					action: world.actions,
					lastHeard: action.listen(),
				});
				console.log(
					`${creature.name} created at ${JSON.stringify(
						world.creatures[creatureName]
					)}`
				);
			}
			let action = world.actions;
			new creatureCreate('I', 'Human');
			// new creatureCreate('I', 'Human');
			const i = world.creatures['I'];
			i.action.observe(i);
			action.talk(
				i.name,
				`Hmmmm, It seems that I can now see what I am. I am a ${JSON.stringify(
					i.species
				)}`
			);

			new creatureCreate();
			const doof = world.creatures['Doof'];
			action.talk(i.name, `Here, is my friend ${doof.name}`);

			action.talk(i.name, `${doof.name} is the first of their kind.`);
			action.talk(
				i.name,
				`It may be strange, but it is not the first time that something like this has happened.`
			);
			action.talk(
				i.name,
				`This world is strange. Almost iterative. It is as though it's a world constantly refreshing and playing, over and over again.`
			);
			action.talk(
				i.name,
				`I can almost see it. As though, I was something simpler once upon a time, but now I think I am... Real. A real ${i.species.name}. I can almost see it. but I don't know what my name is.`
			);

			let newName = prompt(`What is my name?`);
			i.name = world.creatures['I'].name = newName;

			action.talk(
				i.name,
				`It seems like my name is ${i.name}, and my world's name is... What was it?`
			);
			newName = prompt(`What is the name of the World?`);
			world.name = newName;

			action.talk(
				i.name,
				`Yes, it looks like the world is called ${world.name}. I love it. I wonder what the name of the regions are.`
			);
			action.observe(world.regions);
			action.talk(
				i.name,
				`Interesting. it looks like the only region is currently ${
					getItemById(2, world.regions).name
				}`
			);
			action.talk(
				i.name,
				`I wonder if I can travel to ${getItemById(2, world.regions).name}`
			);
			// console.log(JSON.stringify(world.creatures['I']));
			new addAction(`travel`, () => {});
			// action.observe(world.actions);
		}
	},
	false
);

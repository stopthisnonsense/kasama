'use strict';
window.addEventListener(
	'load',
	() => {
		//This is the game world object, which controls and builds out everything.
		const world = {
			name: 'world',
			creatures: [],
			species: [],
		};
		let message = 'Welcome to the game';
		const gameMessage = (message = message) => {
			console.log(message);
		};
		let idNumber = 0,
			lastObserved = '';
		gameMessage(message);
		console.log(`Something feels different.`);
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
		class Species {
			constructor(name) {
				this.id = idNumber++;
				this.name = name;
				world.species.push(this);
			}
		}
		function creatureCreate(name, species) {
			this.id = idNumber++;
			this.name = name ? name : 'Doof';
			this.species = species ? new Species(species) : new Species('Doof');
			this.action = action;
			this.lastHeard = this.action.listen();
			world.creatures.push(this);
		}

		new creatureCreate('I', 'Human');
		const i = world.creatures[0];
		i.action.observe(i);
		action.talk(
			i.name,
			`Hmmmm, It seems that I can now see what I am. I am a ${i.species}`
		);
		action.talk(i.name, `At least, I think something is different`);
		new creatureCreate();
		const doof = world.creatures[1];
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

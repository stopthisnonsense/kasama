'use strict';
window.addEventListener(
	'load',
	() => {
		//This is the game world object, which controls and builds out everything.
		const world = {
			name: 'world',
			creatures: [],
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
			listen: (data) => {
				if (data) {
					return data;
				}
				return `Nothing was Heard.`;
			},
			talk: (creature, data) => {
				if (data) {
					console.log(`${creature} said: ${data}`);
				}
			},
			observe: (creature, data) => {
				if (creature) {
					return console.log(JSON.stringify(creature));
				}
				return;
			},
		};

		function creatureCreate(name, species) {
			this.id = idNumber++;
			this.name = name ? name : 'Doof';
			this.species = species ? species : 'Doof';
			this.action = action;
			this.lastHeard = this.action.listen();
			world.creatures.push(this);
		}
		const i = new creatureCreate('I', 'Human');
		i.action.observe(i);
		action.talk(
			i.name,
			`Hmmmm, It seems that I can now see what I am. I am a ${i.species}`
		);
		action.talk(i.name, `At least, I think something is different`);
		const doof = new creatureCreate();
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

			doof.lastHeard = doof.action.listen(
				action.talk(i.name, `${doof.name}! You speak! `)
			);
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

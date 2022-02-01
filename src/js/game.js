'use strict';
window.addEventListener(
	'load',
	() => {
		let message = 'Welcome to the game';
		const gameMessage = (message = message) => {
			console.log(message);
		};
		let idNumber = 0;
		gameMessage(message);
		const actions = {
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
		};

		function creatureCreate() {
			this.id = idNumber++;
			this.name = 'Doof';
			this.action = actions;
			this.lastHeard = this.action.listen();
		}

		const doof = new creatureCreate();
		console.log(`Here, is my friend ${doof.name}`);

		console.log(`${doof.name} is the first of their kind.`);
		console.log(
			`It may be strange, but it is not the first time that something like this has happened.`
		);
		console.log(`Back to ${doof.name} for a minute though.`);
		console.log(
			`${doof.name} may be named ${doof.name}, but that is not enough. We must first figure out what ${doof.name} is.`
		);
		console.log(`${doof.name}, may I ask you, what are you.`);
		console.log(doof);
		if (doof.lastHeard) {
			// console.log(doof.action.listen());
			doof.lastHeard = doof.action.listen(
				`${doof.name} seemed to recognize it. I feel something is different.`
			);
			console.log(`${doof.names}'s last heard sound was ${doof.lastHeard}`);

			doof.action.talk(doof.name, `Sup`);

			doof.lastHeard = doof.action.listen(
				console.log(`${doof.name}! You speak! `)
			);
			doof.lastHeard;
		}

		console.log(`Hmmm.`);

		console.log(
			`It seems that I may not manifest myself on this. I need a method!`
		);
	},
	false
);

window.addEventListener(
	'load',
	() => {
		let message = 'Welcome to the game';
		const gameMessage = (message = message) => {
			console.log(message);
		};

		gameMessage(message);
		function creatureCreate() {
			let idNumber;

			this.id = idNumber++;
			this.name = 'Doof';
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
		console.log(`Hmmm.`);
		console.log(
			`It seems that I may not manifest myself on this. I need a method!`
		);
	},
	false
);

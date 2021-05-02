/**
 * (c) geckse
 */

const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');
const Patches = require('Patches');
const Time = require('Time');


(async function() {
	let objMode = await Patches.outputs.getScalar('objectNameRange');
	const [texts] = await await Promise.all([Scene.root.findFirst('ObjectName')]);

	// Store the subscription in a variable
	objMode.monitor().subscribe(function (gesture) {
	  let label = texts;
			let mode = objMode.pinLastValue();
			let labels = [
			  'person',
			  'human',
			  'alien',
			  'dog',
			  'cat',
			  'car',
			  'anger',
			  'happiness',
			  'awake',
			  'coffee',
			  'sleeping',
			  'creep',
			  'cringe',
			  'online',
			  'ready',
			  'target',
			  'waste',
			  'hustle',
			  'developer',
			  'addicted',
			  'detected',
			  'target',
			  'skeptic',
			  'hero',
			  'animal',
			  'real',
			  'virgin',
			  'hot'
			];
			label.text = labels[mode];
	});
})();

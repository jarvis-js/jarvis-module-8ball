/*global module*/

module.exports = function(jarvis, module) {

	var replies = [
		'It is certain',
		'It is decidedly so',
		'Without a doubt',
		'Yes - definitely',
		'You may rely on it',
		'As I see it, yes',
		'Most likely',
		'Outlook good',
		'Signs point to yes',
		'Yes',
		'Hmmmmmmmm',
		'Reply hazy, try again',
		'Ask again later',
		'Better not tell you now',
		'Cannot predict now',
		'Concentrate and ask again',
		'Don\'t count on it',
		'My reply is no',
		'My sources say no',
		'Outlook not so good',
		'Very doubtful'
	];

	module.addAction(module.createCommand({
		name: '8ball',
		match: new RegExp('(eightball|8ball) (.*)', 'i'),
		func: function(message) {
			jarvis.reply(message, replies[Math.floor(Math.random()*replies.length)]);
		}
	}));

};

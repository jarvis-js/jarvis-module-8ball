module.exports = function(bot, module) {

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

	module.addCommand({
		match: /(eightball|8ball) (.*)/i,
		func: function(request) {
			request.reply = replies[Math.floor(Math.random()*replies.length)];
			bot.reply(request);
		}
	});

};

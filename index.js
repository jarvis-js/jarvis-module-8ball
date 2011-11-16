module.exports = function(bot) {

	var module = new bot.Module();

	module.load = function() {
		var replies = [
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes – definitely',
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

		module.addCommand(/(eightball|8ball) (.*)/i, function(request) {
				request.reply = replies[Math.floor(Math.random()*replies.length)];
				bot.respond(request);
		});
	};

	return module;
};

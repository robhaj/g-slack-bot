var request = require('request-promise')
var BotKit = require('botkit')

var gBot = BotKit.slackbot({
  debug: false
});

// Connect to Slack via BeepBoop
gBot.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM(function(err,bot,payload){
  if (err) {
    throw new Error('Could not connect to slack');
  }
})

gBot.on(['direct_message', 'direct_mention', 'mention'], function(bot, message) {
  bot.reply(message, 'Please link all relevant curriculum resources to Git')
});

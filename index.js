// Include the Discord library
const Discord = require('discord.js');
const client = new Discord.Client();

// When the bot is ready, log on the console
client.on('ready', () => {
  console.log("Bot started!"); 
});

// When users send a message
client.on('message', msg => {
  if (msg.content == 'Is JavaScript good?') {
    msg.reply('Yeah!'); //or msg.channel.send('Yeah!')
  }
});

client.login('yourToken'); //Replace yourToken with the token
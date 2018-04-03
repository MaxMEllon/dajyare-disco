const Discord = require('discord.js');
const Dajare = require('./lib/dajyare')

const client = new Discord.Client();
require('dotenv').config()

client.on('message', message => {
  if (!message.author.bot && message.content !== '') {
    new Dajare(message.content)
      .isDajareAsync()
      .then(res => message.channel.send(`${res} YO!`))
      .catch(_ => _)
  }
});

client.login(process.env.TOKEN);

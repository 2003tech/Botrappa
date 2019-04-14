const Discord = require('discord.js')
const bot = new Discord.Client();
var config = require("./config.json")
var blacklisted = require("./blacklisted.json").blacklisted

bot.on('ready', () => {
    console.log(`Botrappa Reborn (Alpha - Github Version) has launched with tag ${bot.user.tag} and Botrappa is operating on ${bot.guilds.size} servers!`)
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size} servers!`,
            type: 0
        }
    });
    bot.user.setStatus("busy")
});

var prefix = config.prefix;

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.split(" ");
  const command = args.shift().slice(prefix.length);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args, config);
  } catch (err) {
    console.error(err);
  }
});

bot.login('lol no')

const Discord = require('discord.js')
const bot = new Discord.Client();
var config = require("./config.json")
var blacklisted = require("./blacklisted.json").blacklisted

bot.on('ready', () => {
    console.log(`Botrappa Reborn (Alpha - Open Source Version) has launched with tag ${bot.user.tag} and Botrappa is operating on ${bot.guilds.size} servers!`)
    bot.user.setPresence({
        game: {
            name: `EXPRIMENTAL BUILD | ${config.prefix}help | ${bot.guilds.size} servers!`,
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

bot.login('NTUyOTExNjQ4ODE4NzI0OTAz.XLOaEg.ZYbv-wQaSpUWQV-xYIETuVQVK3k')

//memes how the fuck do i launch BOTRAPPA
//open cmd on ur computer THERE'S NO FUCKING TOKEN
//open it and do to ur directory
//paste it on the file and on the terminal do "node [file]" 
// UNEXPECTED TOKEN
// THAT IS THE TOKEN YOU GAVE ME
// IT'S THE CORRECT ONE
// YOU FUCKING DID SOMETHING
// please do not node the json ones
// its node bot.js
//// reee
//hey
const Discord = require('discord.js')
const bot = new Discord.Client();
var config = require("./config.json")
var blacklisted = require("./blacklisted.json").blacklisted
var apitoken = ("lol no")

bot.on('ready', () => {
    console.log(`Botrappa Reborn (Alpha) has launched with tag ${bot.user.tag} and Botrappa is operating on ${bot.guilds.size} servers!`)
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size} servers!`,
            type: 0
        }
    });
    bot.user.setStatus("busy")
});

bot.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
  .setTitle(':inbox_tray: New Server added!')
  .setAuthor('Server Name: ' + guild.name + ' (' + guild.id + ')', guild.iconURL)
  .addField('Server Owner ID:', guild.ownerID, true)
  .addField('Member Count:', guild.memberCount, true).setThumbnail(guild.iconURL)
  .setColor(0x428CF4)
  .setDescription('I am now in ' + bot.guilds.size + ' Servers!')
  .setTimestamp();
    bot.channels.get(config.guildlog_id).sendEmbed(embed)

    console.log(`Guild added: ${guild.name}, Owned by: ${guild.owner.user.username}#${guild.owner.user.discriminator}. I'm on ${bot.guilds.size} Guilds now`)
    console.log('Server Name: ' + guild.name + ' (' + guild.id + ')' + ' New Server added! ' + 'I am now in ' + bot.guilds.size + ' Servers!')
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size} servers!`,
            type: 0
        }
    });

snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
  .set('Authorization', apitoken)
  .send({ server_count: bot.guilds.size })
  .then(console.log('Updated dbots.org status.'))
});

bot.on("guildDelete", guild => {
const embed = new Discord.RichEmbed()
.setTitle(':outbox_tray: Bot was removed from a server :(')
.setAuthor('Server Name: ' + guild.name + ' (' + guild.id + ')', guild.iconURL)
.setThumbnail(guild.iconURL)
.setColor(0xFF0000)
.setDescription('I am now in ' + bot.guilds.size + ' Servers!')
.setTimestamp();
    bot.channels.get(config.guildlog_id).sendEmbed(embed)

    console.log('Server Name: ' + guild.name + ' (' + guild.id + ')' + ' Bot was removed from a server :( ' + 'I am now in ' + bot.guilds.size + ' Servers!')
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size} servers!`,
            type: 0
        }
    });

snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
  .set('Authorization', apitoken)
  .send({ server_count: bot.guilds.size })
  .then(console.log('Updated dbots.org status.'))
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

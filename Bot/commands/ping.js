const Discord = require('discord.js')

exports.run = function(bot, message) {
    const embed = new Discord.RichEmbed()
    .setTitle(":ping_pong: Pong! " + bot.ping.toFixed() + " ms.")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}

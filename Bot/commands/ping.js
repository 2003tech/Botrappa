const Discord = require('discord.js')

exports.run = function(bot, message) {
    const embed = new Discord.RichEmbed()
    .setTitle("🏓 Pong! " + bot.ping.toFixed() + " ms.")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}

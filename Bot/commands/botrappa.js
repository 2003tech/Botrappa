const Discord = require('discord.js')

exports.run = function(bot, message, config) {
    const embed = new Discord.RichEmbed()
    .setTitle("Botrappa Reborn (Alpha")
    .setColor(message.guild.me.displayHexColor)
    .setFooter("Work in progress, Brought to you by ", config.owneridtwo)
    message.channel.send({embed, embed})
}
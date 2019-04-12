const Discord = require('discord.js')

exports.run = function(bot, message, args){
    const embed = new Discord.RichEmbed()
    .setTitle(args.join(" "))
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}
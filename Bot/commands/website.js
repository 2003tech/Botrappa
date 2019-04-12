const Discord = require('discord.js')

exports.run = function(bot, message){
    const embed = new Discord.RichEmbed()
    .setTitle('We do not have a website. Expect one later. I presume?')
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}
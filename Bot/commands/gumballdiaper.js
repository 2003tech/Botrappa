const Discord = require('discord.js')

exports.run = function(bot, message, config) {
    const embed = new Discord.RichEmbed()
    .setTitle("Hey! The hidden command!")
    .setColor(message.guild.me.displayHexColor)
    .addField("What should i do", "add (Gumball's Pranks#4771) and spam him diaper/babyfur art out of Gumball.")
    message.channel.send({embed, embed})
}
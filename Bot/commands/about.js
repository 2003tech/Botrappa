const Discord = require('discord.js')

exports.run = function(bot, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("About Page", bot.user.avatarURL)
    .addField("This bot was made by the team of", "Gamerappa, Memes and XPUser")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}
//so what we do
//OMG WTF
//whats that
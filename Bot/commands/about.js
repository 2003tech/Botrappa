const Discord = require('discord.js')

exports.run = function(bot, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("About Page", bot.user.avatarURL)
    .setTitle("Warning: This bot is incomplete. It may not have a lot of commands.")
    .addField("This bot was made by the team of", "Gamerappa (Parappafan98), Memes and XPUser")
    .addField("Special thanks to", "These guys up me")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}

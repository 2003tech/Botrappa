const Discord = require('discord.js')

exports.run = function(bot, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Help", bot.user.avatarURL)
    .addField("(ping", "Pong!")
    .addField("(feedback", "Sends feedback to the owners. Example: ``(feedback Feedback here``")
    .addField("(message", "Sends someone a message. Example: ``(message @user Message``")
    .addField("(coinflip", "Flips a coin!")
    .addField("(diceroll", "Rolls a dice from 1 to 6!")
    .addField("(8ball", "The bot will say the truth heh. Example: ``(8ball Question``")
    .addField("disclaimer", "This bot is a bit out-dated and some bits of developement resulted in well... drama.")
    .setColor(message.guild.me.displayHexColor)
    message.channel.send({embed, embed})
}

const Discord = require('discord.js')

exports.run = function(bot, message, args) {
    if(!args[0]){
       message.channel.send("Please add something after the command.")
    }
    message.channel.send("Feedback sent!")
    const embed = new Discord.RichEmbed()
    .setAuthor("New feedback!", message.author.avatarURL)
    .addField("User", message.author.tag)
    .addField("Feedback", args.join(" "))
    .setColor(message.guild.me.displayHexColor)
    bot.channels.get('557686423713611814').send({embed, embed})
}

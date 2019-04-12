const Discord = require('discord.js')

exports.run = function(bot, messsage) {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention user.")
    const embed = new Discord.RichEmbed(user.bot === true ? `Yes` : `No`)
    .setAuthor(`Info - ${user.username}`, user.avatarURL)
    .setColor(message.guild.me.displayHexColor)
    .addField("🗓 Date Created", user.createdAt, true)
    .addField("ℹ Username", user.username, true)
    .addField("ℹ Discriminator", user.discriminator, true)
    .addField("🆔 ID", user.id, true)
    .addField(`🤖 Bot`, user.bot, true)
    message.channel.send({embed, embed})
}
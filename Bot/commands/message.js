const Discord = require('discord.js')

exports.run = function(bot, message, args) {
    let sentmessage = args.splice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to message.").catch(console.error);
    if (message.length < 1) return message.channel.sendMessage('Please enter a message.');
    const embed = new Discord.RichEmbed()
    .setAuthor("You have been sent a message!", message.author.avatarURL)
    .setDescription(`${message.author.tag} has sent you a private message!`)
    .addField("User", message.author.tag)
    .addField("Message", sentmessage)
    .setFooter("How to send a message back. Go to any sever that has this same person and do (message @user Message here")
    .setColor(message.guild.me.displayHexColor)
    user.send({embed, embed}).then(message.channel.send("Message Sent!"))
}

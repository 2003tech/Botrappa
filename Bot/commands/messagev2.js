const Discord = require('discord.js')

exports.run = function(bot, message, args){
    let sentmessage = args.splice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send("You must mention the user you are going to message.").catch(console.error);
    if (message.length < 1) return message.channel.send('Please enter a message.');
    const embed = new Discord.RichEmbed()
    .setAuthor(`New message from ${message.author.tag}`, message.author.avatarURL)
    .setColor(message.guild.me.displayHexColor)
    .addField('Message', args.join(" "))
    message.channel.send(`Message sent to ${user.tag}`)
    const logembed = new Discord.RichEmbed()
    .setAuthor('New message!', message.author.avatarURL)
    .addField('User', message.author.avatarURL)
    .addField('Message', args.join(" "))
    .addField('To', user.tag)
    bot.channels.get('369125980515860480').send({logembed, logembed})
}
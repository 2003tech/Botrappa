const Discord = require('discord.js')

exports.run = function(bot, message, config, args){
    const embed = new Discord.RichEmbed()
    .setTitle("🖥 | Botrappa Status Report", bot.user.avatarURL)
    .setColor(message.guild.me.displayHexColor)
    .setFooter(`The stats of Botrappa`)
    .setTimestamp()
    .setDescription('All Stats for Botrappa')
    .addField("Ping", `${bot.ping} ms`, true)
    .addField('Memory', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
    .addField('Guilds', `${bot.guilds.size}`)
    .addField("Uptime", (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes", true)
    .addField("Members", bot.users.size, true)
    .addField("Channels", bot.channels.size, true)
    .addField("Node Version", process.version, true)
    .addField("CPUs", require('os').cpus().length)
    message.channel.send({embed, embed})
}
const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 You number is: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}
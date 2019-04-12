const Discord = require('discord.js')

exports.run = function(bot, message){
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('I flipped: ' + coinFlipMagic()));

    function coinFlipMagic() {
        var rand = ['Tails', 'Heads'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}
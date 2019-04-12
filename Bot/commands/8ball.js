const Discord = require('discord.js')

exports.run = function(bot, message){
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎱 Your answer is: ' + doMagic8BallVoodoo()));

    function doMagic8BallVoodoo() {
        var rand = ['Yes', 'No', 'It is certain.', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'In the future.', 'Well. I cant think right now', 'NAH BRUH'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}
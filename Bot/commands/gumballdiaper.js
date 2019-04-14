const Discord = require('discord.js')

exports.run = function(bot, message, config) {
    const embed = new Discord.RichEmbed()
    .setTitle("Gumball in diapers!")
    .setImage(ohFuckMyEyes())
    .setColor('#8b4c3b')

    message.channel.send("<@557329318808911892>", embed)
}

function ohFuckMyEyes(){
    var rand = ["https://bit.ly/2X6I7RW", "https://bit.ly/2Dd6l5N", "http://bit.ly/2VJfHND", "https://bit.ly/2VFT10O"]
    return rand[Math.floor(Math.random()*rand.length)];
}
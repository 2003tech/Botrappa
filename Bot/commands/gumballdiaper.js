const Discord = require('discord.js')
const talkedRecently = new Set();

exports.run = function(bot, message, config) {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
        return
    }
    const embed = new Discord.RichEmbed()
    .setTitle("Gumball in diapers!")
    .setImage(ohFuckMyEyes())
    .setColor('#8b4c3b')

    message.channel.send("<@557329318808911892>", {embed: embed})
}

function ohFuckMyEyes(){
    var rand = ["https://bit.ly/2X6I7RW", "https://bit.ly/2Dd6l5N", "http://bit.ly/2VJfHND", "https://bit.ly/2VFT10O"]
    return rand[Math.floor(Math.random()*rand.length)];
}

// i don't think we'll work on that -gamerappa
